import os, asyncio
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from dotenv import load_dotenv
from app.models import ConfigRequest, LogAnalysisRequest, ErrorDiagnosisRequest, ChatRequest
from app.services import llm_service

load_dotenv()
app = Flask(__name__, template_folder="../templates", static_folder="../static")
CORS(app)

def run_async(coro):
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    try: return loop.run_until_complete(coro)
    finally: loop.close()

@app.route("/")
def index(): return render_template("index.html")

@app.route("/api/health")
def health(): return jsonify({"status": "healthy", "provider": os.getenv("LLM_PROVIDER", "openai")})

@app.route("/api/config", methods=["POST"])
def generate_config():
    try:
        req = ConfigRequest(**request.get_json())
        return jsonify(run_async(llm_service.generate_config(req.config_type.value, req.description, req.requirements, req.language)))
    except Exception as e: return jsonify({"error": str(e)}), 500

@app.route("/api/logs", methods=["POST"])
def analyze_logs():
    try:
        req = LogAnalysisRequest(**request.get_json())
        return jsonify(run_async(llm_service.analyze_logs(req.logs, req.log_type, req.language)))
    except Exception as e: return jsonify({"error": str(e)}), 500

@app.route("/api/diagnose", methods=["POST"])
def diagnose_error():
    try:
        req = ErrorDiagnosisRequest(**request.get_json())
        return jsonify(run_async(llm_service.diagnose_error(req.error_message, req.context, req.stack_trace, req.language)))
    except Exception as e: return jsonify({"error": str(e)}), 500

@app.route("/api/chat", methods=["POST"])
def chat():
    try:
        req = ChatRequest(**request.get_json())
        history = [{"role": m.role, "content": m.content} for m in req.history]
        return jsonify({"response": run_async(llm_service.chat(req.message, req.context, history, req.language))})
    except Exception as e: return jsonify({"error": str(e)}), 500

@app.route("/api/config-types")
def get_config_types():
    return jsonify({"types": ["dockerfile", "docker_compose", "kubernetes", "github_actions", "gitlab_ci", "terraform", "nginx", "prometheus"]})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.getenv("PORT", 5000)), debug=os.getenv("FLASK_DEBUG", "false").lower() == "true")
