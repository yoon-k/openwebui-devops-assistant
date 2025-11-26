from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
from enum import Enum

class ConfigType(str, Enum):
    DOCKERFILE = "dockerfile"
    DOCKER_COMPOSE = "docker_compose"
    KUBERNETES = "kubernetes"
    GITHUB_ACTIONS = "github_actions"
    GITLAB_CI = "gitlab_ci"
    TERRAFORM = "terraform"
    NGINX = "nginx"
    PROMETHEUS = "prometheus"

class LogLevel(str, Enum):
    ERROR = "error"
    WARNING = "warning"
    INFO = "info"
    DEBUG = "debug"

class ConfigRequest(BaseModel):
    config_type: ConfigType
    description: str = Field(..., description="What to configure")
    requirements: List[str] = Field(default_factory=list)
    language: str = "en"

class LogAnalysisRequest(BaseModel):
    logs: str = Field(..., description="Log content to analyze")
    log_type: Optional[str] = None
    language: str = "en"

class ErrorDiagnosisRequest(BaseModel):
    error_message: str
    context: Optional[str] = None
    stack_trace: Optional[str] = None
    language: str = "en"

class ChatMessage(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    message: str
    context: Optional[str] = None
    language: str = "en"
    history: List[ChatMessage] = Field(default_factory=list)

class LogIssue(BaseModel):
    level: LogLevel
    message: str
    line: Optional[int] = None
    suggestion: str

class AnalysisResult(BaseModel):
    summary: str
    issues: List[LogIssue]
    recommendations: List[str]
    root_cause: Optional[str] = None
