import os, json, aiohttp
from typing import Optional, List, Dict, Any
from abc import ABC, abstractmethod

class LLMProvider(ABC):
    @abstractmethod
    async def generate(self, prompt: str, system_prompt: str = "") -> str: pass

class OpenAIProvider(LLMProvider):
    def __init__(self):
        self.api_key = os.getenv("OPENAI_API_KEY", "")
        self.model = os.getenv("OPENAI_MODEL", "gpt-4-turbo-preview")
    async def generate(self, prompt: str, system_prompt: str = "") -> str:
        messages = [{"role": "system", "content": system_prompt}] if system_prompt else []
        messages.append({"role": "user", "content": prompt})
        async with aiohttp.ClientSession() as s:
            async with s.post("https://api.openai.com/v1/chat/completions", headers={"Authorization": f"Bearer {self.api_key}", "Content-Type": "application/json"}, json={"model": self.model, "messages": messages, "temperature": 0.3, "max_tokens": 4096}) as r:
                return (await r.json())["choices"][0]["message"]["content"]

class OllamaProvider(LLMProvider):
    def __init__(self):
        self.url = os.getenv("OLLAMA_BASE_URL", "http://localhost:11434")
        self.model = os.getenv("OLLAMA_MODEL", "codellama:13b")
    async def generate(self, prompt: str, system_prompt: str = "") -> str:
        async with aiohttp.ClientSession() as s:
            async with s.post(f"{self.url}/api/generate", json={"model": self.model, "prompt": f"{system_prompt}\n\n{prompt}" if system_prompt else prompt, "stream": False}) as r:
                return (await r.json())["response"]

class AnthropicProvider(LLMProvider):
    def __init__(self):
        self.api_key = os.getenv("ANTHROPIC_API_KEY", "")
        self.model = os.getenv("ANTHROPIC_MODEL", "claude-3-sonnet-20240229")
    async def generate(self, prompt: str, system_prompt: str = "") -> str:
        async with aiohttp.ClientSession() as s:
            payload = {"model": self.model, "max_tokens": 4096, "messages": [{"role": "user", "content": prompt}]}
            if system_prompt: payload["system"] = system_prompt
            async with s.post("https://api.anthropic.com/v1/messages", headers={"x-api-key": self.api_key, "anthropic-version": "2023-06-01", "Content-Type": "application/json"}, json=payload) as r:
                return (await r.json())["content"][0]["text"]

class LLMService:
    _instance = None
    def __new__(cls):
        if cls._instance is None: cls._instance = super().__new__(cls)
        return cls._instance
    def __init__(self):
        if not hasattr(self, '_provider'):
            p = os.getenv("LLM_PROVIDER", "openai").lower()
            self._provider = {"ollama": OllamaProvider, "anthropic": AnthropicProvider}.get(p, OpenAIProvider)()

    async def generate_config(self, config_type: str, description: str, requirements: List[str], lang: str) -> Dict[str, Any]:
        system = f"You are a DevOps expert. Generate production-ready configurations. {'한국어로.' if lang == 'ko' else '日本語で.' if lang == 'ja' else ''} Return JSON: {{\"config\": \"generated config content\", \"explanation\": \"brief explanation\", \"best_practices\": []}}"
        prompt = f"Generate {config_type} configuration for: {description}\nRequirements: {', '.join(requirements) if requirements else 'Standard setup'}"
        return self._parse_json(await self._provider.generate(prompt, system))

    async def analyze_logs(self, logs: str, log_type: str, lang: str) -> Dict[str, Any]:
        system = f"You are a log analysis expert. {'한국어로.' if lang == 'ko' else '日本語で.' if lang == 'ja' else ''} Return JSON: {{\"summary\": \"\", \"issues\": [{{\"level\": \"error|warning|info\", \"message\": \"\", \"line\": null, \"suggestion\": \"\"}}], \"root_cause\": \"\", \"recommendations\": []}}"
        prompt = f"Analyze these {log_type or 'application'} logs:\n```\n{logs}\n```"
        return self._parse_json(await self._provider.generate(prompt, system))

    async def diagnose_error(self, error: str, context: str, stack_trace: str, lang: str) -> Dict[str, Any]:
        system = f"You are a debugging expert. {'한국어로.' if lang == 'ko' else '日本語で.' if lang == 'ja' else ''} Return JSON: {{\"diagnosis\": \"\", \"root_cause\": \"\", \"solution\": \"\", \"steps\": [], \"prevention\": []}}"
        prompt = f"Error: {error}\n{'Context: ' + context if context else ''}\n{'Stack trace: ' + stack_trace if stack_trace else ''}"
        return self._parse_json(await self._provider.generate(prompt, system))

    async def chat(self, message: str, context: str, history: List[Dict], lang: str) -> str:
        system = f"You are a DevOps assistant. Help with Docker, Kubernetes, CI/CD, infrastructure. {'한국어로.' if lang == 'ko' else '日本語で.' if lang == 'ja' else ''}"
        msgs = "\n".join([f"{m['role']}: {m['content']}" for m in history[-10:]])
        prompt = f"{context}\n\n{msgs}\nUser: {message}" if context else f"{msgs}\nUser: {message}"
        return await self._provider.generate(prompt, system)

    def _parse_json(self, response: str) -> Dict[str, Any]:
        try:
            r = response.strip()
            if r.startswith("```"): r = "\n".join(r.split("\n")[1:-1] if r.endswith("```") else r.split("\n")[1:])
            return json.loads(r)
        except: return {"content": response}

llm_service = LLMService()
