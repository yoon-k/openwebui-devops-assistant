# AI DevOps Assistant

> 🎓 **Reference & Study Project** - This project is created for learning and reference purposes, built as a "**Fullstack with AI**" collaboration project - not built by a traditional fullstack developer, but through partnership with AI assistance.

AI-powered DevOps assistant that helps with log analysis, configuration generation, and error diagnosis. Supports multiple LLM providers including OpenAI, Ollama, and Anthropic.

> Use this as a reference for:
> - DevOps configuration best practices
> - Log analysis patterns
> - Infrastructure as Code (IaC) templates
> - Error diagnosis automation
>
> 🚀 **Continuous Improvement**: This project is under active development with ongoing enhancements planned.

🔗 **[Live Demo](https://yoon-k.github.io/openwebui-devops-assistant/)**

![Python](https://img.shields.io/badge/Python-3.11+-blue)
![Flask](https://img.shields.io/badge/Flask-3.0+-green)
![Docker](https://img.shields.io/badge/Docker-Ready-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)
![i18n](https://img.shields.io/badge/i18n-EN%20|%20KO%20|%20JA-purple)

## Features

### 🔧 Config Generation
Generate production-ready configurations for:
- **Dockerfile** - Multi-stage builds, security best practices
- **Docker Compose** - Service orchestration
- **Kubernetes** - Deployments, Services, ConfigMaps
- **GitHub Actions** - CI/CD workflows
- **GitLab CI** - Pipeline configurations
- **Terraform** - Infrastructure as Code
- **Nginx** - Reverse proxy, load balancing
- **Prometheus** - Monitoring and alerting

### 📊 Log Analysis
Intelligent log parsing and analysis:
- Error pattern detection
- Warning identification
- Root cause analysis
- Actionable recommendations
- Support for multiple log formats

### 🔍 Error Diagnosis
Comprehensive error troubleshooting:
- Stack trace analysis
- Root cause identification
- Step-by-step solutions
- Best practice recommendations

### 💬 DevOps Chat
Interactive AI assistant for:
- DevOps best practices
- Infrastructure guidance
- Troubleshooting help
- Learning and exploration

## Quick Start

### One-Command Installation

```bash
# Clone and run with Docker
git clone https://github.com/yoon-k/openwebui-devops-assistant.git
cd openwebui-devops-assistant
cp .env.example .env
# Edit .env with your API key
docker-compose up -d
```

Access at: http://localhost:5000

### Manual Installation

```bash
# Clone repository
git clone https://github.com/yoon-k/openwebui-devops-assistant.git
cd openwebui-devops-assistant

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Configure environment
cp .env.example .env
# Edit .env with your settings

# Run application
python -m app.api
```

## Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `LLM_PROVIDER` | LLM provider (openai/ollama/anthropic) | `openai` |
| `OPENAI_API_KEY` | OpenAI API key | - |
| `OPENAI_MODEL` | OpenAI model | `gpt-4o-mini` |
| `OLLAMA_HOST` | Ollama server URL | `http://localhost:11434` |
| `OLLAMA_MODEL` | Ollama model | `llama3.2` |
| `ANTHROPIC_API_KEY` | Anthropic API key | - |
| `ANTHROPIC_MODEL` | Anthropic model | `claude-3-haiku-20240307` |

### Using Ollama (Local LLM)

```bash
# Start with Ollama profile
docker-compose --profile ollama up -d

# Or run Ollama separately
ollama serve
ollama pull llama3.2
```

## API Reference

### Generate Configuration
```http
POST /api/config
Content-Type: application/json

{
  "config_type": "dockerfile",
  "description": "Python Flask app with PostgreSQL",
  "requirements": ["health check", "multi-stage build"],
  "language": "en"
}
```

### Analyze Logs
```http
POST /api/logs
Content-Type: application/json

{
  "logs": "[ERROR] Connection refused...",
  "log_type": "application",
  "language": "en"
}
```

### Diagnose Error
```http
POST /api/diagnose
Content-Type: application/json

{
  "error_message": "OOMKilled: Container exceeded memory limit",
  "context": "Kubernetes pod running Java app",
  "stack_trace": "java.lang.OutOfMemoryError...",
  "language": "en"
}
```

### Chat
```http
POST /api/chat
Content-Type: application/json

{
  "message": "How do I set up Kubernetes HPA?",
  "context": "web application",
  "history": [],
  "language": "en"
}
```

## Technology Stack

### Backend
- **Flask** - Lightweight Python web framework
- **Flask-CORS** - Cross-Origin Resource Sharing support
- **Pydantic** - Data validation with Python type hints
- **aiohttp** - Async HTTP client for LLM API calls
- **Gunicorn** - Production WSGI server

### Frontend
- **Vanilla JavaScript** - No framework dependencies
- **CSS Variables** - Theming and dark mode
- **i18n** - Multi-language support (EN, KO, JA)

### Infrastructure
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **GitHub Pages** - Static demo hosting

### LLM Providers
- **OpenAI** - GPT-4, GPT-3.5
- **Ollama** - Local LLMs (Llama, CodeLlama, Mistral)
- **Anthropic** - Claude models

## Project Structure

```
openwebui-devops-assistant/
├── app/
│   ├── __init__.py
│   ├── api.py              # Flask routes
│   ├── models/
│   │   └── devops.py       # Pydantic models
│   ├── services/
│   │   └── llm_service.py  # LLM integration
│   └── utils/
├── templates/
│   └── index.html          # Main template
├── static/
│   ├── css/
│   │   └── style.css       # Styling
│   └── js/
│       └── app.js          # Frontend logic
├── docs/
│   └── index.html          # GitHub Pages demo
├── Dockerfile
├── docker-compose.yml
├── requirements.txt
└── README.md
```

## Multi-Language Support

The application supports three languages:
- 🇺🇸 English (EN)
- 🇰🇷 Korean (한국어)
- 🇯🇵 Japanese (日本語)

Switch languages using the selector in the header.

## Use Cases

### 1. DevOps Beginners
- Generate starter configurations
- Learn best practices
- Understand error messages

### 2. Development Teams
- Quick config scaffolding
- Standardize configurations
- Troubleshoot issues faster

### 3. SRE/Operations
- Rapid log analysis
- Error diagnosis
- Infrastructure templates

---

## 🔬 Technical Study Guide

### Key Technologies Explained

#### 1. Configuration Generation with LLMs
Using AI to generate production-ready configurations.

```python
CONFIG_PROMPTS = {
    "dockerfile": """Generate a production Dockerfile for: {description}

Requirements:
- Multi-stage build for smaller images
- Non-root user for security
- Health check endpoint
- Proper layer caching
- .dockerignore recommendations

Include comments explaining each decision.""",

    "kubernetes": """Generate Kubernetes manifests for: {description}

Include:
- Deployment with resource limits
- Service (ClusterIP/LoadBalancer)
- ConfigMap for configuration
- HPA for auto-scaling
- Liveness/Readiness probes

Follow Kubernetes best practices.""",

    "github_actions": """Generate a GitHub Actions workflow for: {description}

Include:
- Build and test steps
- Caching for dependencies
- Security scanning
- Multi-environment deployment
- Secrets management"""
}
```

**Key Concepts:**
- **Multi-stage Builds**: Reduce image size by separating build and runtime
- **Resource Limits**: Prevent runaway containers
- **Probes**: Health monitoring for container orchestration

#### 2. Log Analysis Patterns
Parsing and analyzing application logs intelligently.

```python
LOG_PATTERNS = {
    "error": r"(?i)(error|exception|failed|fatal|critical)",
    "warning": r"(?i)(warn|warning|deprecated)",
    "timestamp": r"\d{4}-\d{2}-\d{2}[T ]\d{2}:\d{2}:\d{2}",
    "ip_address": r"\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b",
    "stack_trace": r"^\s+at\s+[\w.$]+\(.*:\d+\)",
}

async def analyze_logs(logs: str, log_type: str) -> dict:
    # Pre-process: Extract patterns
    errors = re.findall(LOG_PATTERNS["error"], logs)
    warnings = re.findall(LOG_PATTERNS["warning"], logs)

    # LLM analysis for context
    analysis_prompt = f"""Analyze these {log_type} logs:
    {logs[:4000]}

    Identify:
    1. Critical errors and their likely causes
    2. Warning patterns that might escalate
    3. Root cause hypothesis
    4. Recommended actions

    Return structured JSON."""

    llm_analysis = await llm.generate(analysis_prompt)

    return {
        "error_count": len(errors),
        "warning_count": len(warnings),
        "analysis": parse_json(llm_analysis),
        "severity": calculate_severity(errors, warnings)
    }
```

#### 3. Error Diagnosis Flow
Systematic approach to debugging issues.

```python
DIAGNOSIS_TEMPLATE = """You are a senior DevOps engineer diagnosing an issue.

Error: {error_message}
Context: {context}
Stack Trace:
{stack_trace}

Follow this diagnostic flow:

1. **Error Classification**
   - Is this a configuration, code, or infrastructure issue?

2. **Root Cause Analysis**
   - What is the direct cause?
   - What conditions led to this?

3. **Impact Assessment**
   - What systems are affected?
   - Is this blocking or degraded?

4. **Solution Steps**
   - Immediate mitigation
   - Proper fix
   - Prevention measures

5. **Related Issues**
   - Common related problems to check

Return JSON with: diagnosis, root_cause, severity, steps[], prevention[]"""
```

#### 4. Dockerfile Best Practices
Generating secure, efficient Dockerfiles.

```python
def generate_dockerfile_prompt(app_type: str, requirements: List[str]) -> str:
    base_practices = """
    # Best Practices Checklist:
    # ✅ Use specific base image tags (not :latest)
    # ✅ Multi-stage build to reduce size
    # ✅ Run as non-root user
    # ✅ Use COPY instead of ADD when possible
    # ✅ Combine RUN commands to reduce layers
    # ✅ Add health check
    # ✅ Set appropriate labels
    # ✅ Use .dockerignore
    """

    return f"""Generate a Dockerfile for {app_type}

{base_practices}

Additional requirements: {', '.join(requirements)}

Example structure for Python:
```dockerfile
# Build stage
FROM python:3.11-slim as builder
WORKDIR /app
COPY requirements.txt .
RUN pip wheel --no-cache-dir --wheel-dir /wheels -r requirements.txt

# Production stage
FROM python:3.11-slim
WORKDIR /app
RUN useradd -m -u 1000 appuser
COPY --from=builder /wheels /wheels
RUN pip install --no-cache /wheels/*
COPY --chown=appuser:appuser . .
USER appuser
HEALTHCHECK CMD curl -f http://localhost:8000/health || exit 1
CMD ["gunicorn", "-w", "4", "app:app"]
```"""
```

#### 5. Kubernetes Configuration Patterns
Generating production-ready K8s manifests.

```python
K8S_TEMPLATES = {
    "deployment": """
apiVersion: apps/v1
kind: Deployment
metadata:
  name: {name}
  labels:
    app: {name}
spec:
  replicas: {replicas}
  selector:
    matchLabels:
      app: {name}
  template:
    metadata:
      labels:
        app: {name}
    spec:
      containers:
      - name: {name}
        image: {image}
        ports:
        - containerPort: {port}
        resources:
          requests:
            memory: "{mem_request}"
            cpu: "{cpu_request}"
          limits:
            memory: "{mem_limit}"
            cpu: "{cpu_limit}"
        livenessProbe:
          httpGet:
            path: /health
            port: {port}
          initialDelaySeconds: 10
          periodSeconds: 30
        readinessProbe:
          httpGet:
            path: /ready
            port: {port}
          initialDelaySeconds: 5
          periodSeconds: 10
""",

    "hpa": """
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: {name}-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: {name}
  minReplicas: {min_replicas}
  maxReplicas: {max_replicas}
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: {cpu_threshold}
"""
}
```

#### 6. CI/CD Pipeline Patterns
GitHub Actions workflow generation.

```python
CICD_STAGES = {
    "test": """
    - name: Run Tests
      run: |
        pytest --cov=app tests/
        coverage report --fail-under=80
    """,

    "security": """
    - name: Security Scan
      uses: snyk/actions/python@master
      with:
        args: --severity-threshold=high
    """,

    "build": """
    - name: Build and Push
      uses: docker/build-push-action@v5
      with:
        context: .
        push: true
        tags: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }}
        cache-from: type=gha
        cache-to: type=gha,mode=max
    """,

    "deploy": """
    - name: Deploy to Kubernetes
      run: |
        kubectl set image deployment/$APP_NAME \
          $APP_NAME=${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }}
        kubectl rollout status deployment/$APP_NAME
    """
}
```

### Learning Path Recommendations

1. **Beginner**: Start with Dockerfile generation and basic configs
2. **Intermediate**: Add Kubernetes deployment patterns
3. **Advanced**: Implement CI/CD pipeline generation
4. **Expert**: Build log analysis and auto-remediation systems

---

## License

MIT License - See [LICENSE](LICENSE) file

## Author

**yoon-k** - [GitHub Profile](https://github.com/yoon-k)

---

⭐ If this project helps you learn DevOps, please give it a star!
