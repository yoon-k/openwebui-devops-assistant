# AI DevOps Assistant

> 🎓 **Reference & Study Project** - This project is created for learning and reference purposes, built as a "Fullstack with AI" collaboration project.

AI-powered DevOps assistant that helps with log analysis, configuration generation, and error diagnosis. Supports multiple LLM providers including OpenAI, Ollama, and Anthropic.

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

## License

MIT License - See [LICENSE](LICENSE) file

## Author

**yoon-k** - [GitHub Profile](https://github.com/yoon-k)

---

⭐ If this project helps you learn DevOps, please give it a star!
