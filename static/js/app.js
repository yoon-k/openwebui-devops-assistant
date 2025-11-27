const i18n = {
    en: {
        title: "AI DevOps Assistant", subtitle: "Log analysis, config generation, error diagnosis", inputPanel: "INPUT", outputPanel: "OUTPUT",
        tabConfig: "Config", tabLogs: "Logs", tabDiagnose: "Diagnose", tabMonitor: "Monitor", tabChat: "Chat", tabHistory: "History",
        configType: "Config Type", description: "Description", descPlaceholder: "Describe what you need...",
        requirements: "Requirements", reqPlaceholder: "Enter requirements (comma separated)",
        generate: "Generate", generating: "Generating...",
        logs: "Log Content", logsPlaceholder: "Paste your logs here...", logType: "Log Type", analyze: "Analyze", analyzing: "Analyzing...",
        errorMsg: "Error Message", errorPlaceholder: "Paste the error message...", context: "Context", contextPlaceholder: "Additional context (environment, version, etc.)",
        stackTrace: "Stack Trace", stackPlaceholder: "Paste stack trace if available...", diagnose: "Diagnose", diagnosing: "Diagnosing...",
        chatPlaceholder: "Ask about DevOps...", send: "Send", emptyTitle: "No Output Yet", emptyDesc: "Configure your input and run the analysis",
        dockerfile: "Dockerfile", docker_compose: "Docker Compose", kubernetes: "Kubernetes", helm: "Helm Chart",
        github_actions: "GitHub Actions", gitlab_ci: "GitLab CI", jenkins: "Jenkinsfile", terraform: "Terraform",
        ansible: "Ansible", nginx: "Nginx", prometheus: "Prometheus", grafana: "Grafana",
        welcome: "Hi! I'm your DevOps assistant. I can help with:\n\n• Docker & Kubernetes configs\n• CI/CD pipelines (GitHub Actions, GitLab CI, Jenkins)\n• Infrastructure as Code (Terraform, Ansible)\n• Log analysis & monitoring\n• Error diagnosis & troubleshooting\n• Security best practices",
        copyCode: "Copy", copied: "Copied!", downloadCode: "Download", clearHistory: "Clear History",
        presets: "Quick Templates", presetPython: "Python App", presetNode: "Node.js App", presetJava: "Java/Spring",
        presetGo: "Go Service", presetMicroservices: "Microservices", presetML: "ML Pipeline",
        historyEmpty: "No history yet", historyItem: "Generated", deleteHistory: "Delete",
        metrics: "Metrics", alerts: "Alerts", dashboards: "Dashboards", runbooks: "Runbooks",
        monitorType: "Monitoring Type", generateMonitor: "Generate Monitoring Config",
        severity: "Severity", timeRange: "Time Range", errorType: "Error Type",
        rootCause: "Root Cause", solution: "Solution", steps: "Resolution Steps", prevention: "Prevention",
        validationError: "Validation Error", required: "This field is required",
        outputFormat: "Output Format", yamlFormat: "YAML", jsonFormat: "JSON", hclFormat: "HCL",
        includeComments: "Include Comments", includeExamples: "Include Examples", productionReady: "Production Ready"
    },
    ko: {
        title: "AI DevOps 도우미", subtitle: "로그 분석, 설정 생성, 오류 진단", inputPanel: "입력", outputPanel: "출력",
        tabConfig: "설정", tabLogs: "로그", tabDiagnose: "진단", tabMonitor: "모니터링", tabChat: "채팅", tabHistory: "기록",
        configType: "설정 유형", description: "설명", descPlaceholder: "필요한 것을 설명하세요...",
        requirements: "요구사항", reqPlaceholder: "요구사항을 입력하세요 (쉼표로 구분)",
        generate: "생성", generating: "생성 중...",
        logs: "로그 내용", logsPlaceholder: "로그를 붙여넣으세요...", logType: "로그 유형", analyze: "분석", analyzing: "분석 중...",
        errorMsg: "오류 메시지", errorPlaceholder: "오류 메시지를 붙여넣으세요...", context: "컨텍스트", contextPlaceholder: "추가 컨텍스트 (환경, 버전 등)",
        stackTrace: "스택 트레이스", stackPlaceholder: "스택 트레이스가 있으면 붙여넣으세요...", diagnose: "진단", diagnosing: "진단 중...",
        chatPlaceholder: "DevOps에 대해 질문하세요...", send: "전송", emptyTitle: "출력 없음", emptyDesc: "입력을 구성하고 분석을 실행하세요",
        dockerfile: "Dockerfile", docker_compose: "Docker Compose", kubernetes: "Kubernetes", helm: "Helm Chart",
        github_actions: "GitHub Actions", gitlab_ci: "GitLab CI", jenkins: "Jenkinsfile", terraform: "Terraform",
        ansible: "Ansible", nginx: "Nginx", prometheus: "Prometheus", grafana: "Grafana",
        welcome: "안녕하세요! DevOps 도우미입니다:\n\n• Docker & Kubernetes 설정\n• CI/CD 파이프라인 (GitHub Actions, GitLab CI, Jenkins)\n• IaC (Terraform, Ansible)\n• 로그 분석 & 모니터링\n• 오류 진단 & 트러블슈팅\n• 보안 모범 사례",
        copyCode: "복사", copied: "복사됨!", downloadCode: "다운로드", clearHistory: "기록 삭제",
        presets: "빠른 템플릿", presetPython: "Python 앱", presetNode: "Node.js 앱", presetJava: "Java/Spring",
        presetGo: "Go 서비스", presetMicroservices: "마이크로서비스", presetML: "ML 파이프라인",
        historyEmpty: "기록이 없습니다", historyItem: "생성됨", deleteHistory: "삭제",
        metrics: "메트릭", alerts: "알림", dashboards: "대시보드", runbooks: "런북",
        monitorType: "모니터링 유형", generateMonitor: "모니터링 설정 생성",
        severity: "심각도", timeRange: "시간 범위", errorType: "오류 유형",
        rootCause: "근본 원인", solution: "해결책", steps: "해결 단계", prevention: "예방",
        validationError: "유효성 검사 오류", required: "이 필드는 필수입니다",
        outputFormat: "출력 형식", yamlFormat: "YAML", jsonFormat: "JSON", hclFormat: "HCL",
        includeComments: "주석 포함", includeExamples: "예시 포함", productionReady: "프로덕션 레디"
    },
    ja: {
        title: "AI DevOpsアシスタント", subtitle: "ログ分析、設定生成、エラー診断", inputPanel: "入力", outputPanel: "出力",
        tabConfig: "設定", tabLogs: "ログ", tabDiagnose: "診断", tabMonitor: "監視", tabChat: "チャット", tabHistory: "履歴",
        configType: "設定タイプ", description: "説明", descPlaceholder: "必要なものを説明...",
        requirements: "要件", reqPlaceholder: "要件を入力（カンマ区切り）",
        generate: "生成", generating: "生成中...",
        logs: "ログ内容", logsPlaceholder: "ログを貼り付け...", logType: "ログタイプ", analyze: "分析", analyzing: "分析中...",
        errorMsg: "エラーメッセージ", errorPlaceholder: "エラーメッセージを貼り付け...", context: "コンテキスト", contextPlaceholder: "追加コンテキスト（環境、バージョンなど）",
        stackTrace: "スタックトレース", stackPlaceholder: "スタックトレースがあれば貼り付け...", diagnose: "診断", diagnosing: "診断中...",
        chatPlaceholder: "DevOpsについて質問...", send: "送信", emptyTitle: "出力なし", emptyDesc: "入力を設定して分析を実行",
        dockerfile: "Dockerfile", docker_compose: "Docker Compose", kubernetes: "Kubernetes", helm: "Helm Chart",
        github_actions: "GitHub Actions", gitlab_ci: "GitLab CI", jenkins: "Jenkinsfile", terraform: "Terraform",
        ansible: "Ansible", nginx: "Nginx", prometheus: "Prometheus", grafana: "Grafana",
        welcome: "こんにちは！DevOpsアシスタントです：\n\n• Docker & Kubernetes設定\n• CI/CDパイプライン\n• IaC（Terraform、Ansible）\n• ログ分析 & 監視\n• エラー診断 & トラブルシューティング\n• セキュリティベストプラクティス",
        copyCode: "コピー", copied: "コピー完了!", downloadCode: "ダウンロード", clearHistory: "履歴を削除",
        presets: "クイックテンプレート", presetPython: "Pythonアプリ", presetNode: "Node.jsアプリ", presetJava: "Java/Spring",
        presetGo: "Goサービス", presetMicroservices: "マイクロサービス", presetML: "MLパイプライン",
        historyEmpty: "履歴がありません", historyItem: "生成済み", deleteHistory: "削除",
        metrics: "メトリクス", alerts: "アラート", dashboards: "ダッシュボード", runbooks: "ランブック",
        monitorType: "監視タイプ", generateMonitor: "監視設定を生成",
        severity: "重大度", timeRange: "時間範囲", errorType: "エラータイプ",
        rootCause: "根本原因", solution: "解決策", steps: "解決手順", prevention: "予防",
        validationError: "バリデーションエラー", required: "この項目は必須です",
        outputFormat: "出力形式", yamlFormat: "YAML", jsonFormat: "JSON", hclFormat: "HCL",
        includeComments: "コメントを含む", includeExamples: "例を含む", productionReady: "本番レディ"
    },
    zh: {
        title: "AI DevOps助手", subtitle: "日志分析、配置生成、错误诊断", inputPanel: "输入", outputPanel: "输出",
        tabConfig: "配置", tabLogs: "日志", tabDiagnose: "诊断", tabMonitor: "监控", tabChat: "聊天", tabHistory: "历史",
        configType: "配置类型", description: "描述", descPlaceholder: "描述您需要的内容...",
        requirements: "需求", reqPlaceholder: "输入需求（逗号分隔）",
        generate: "生成", generating: "生成中...",
        logs: "日志内容", logsPlaceholder: "粘贴日志...", logType: "日志类型", analyze: "分析", analyzing: "分析中...",
        errorMsg: "错误消息", errorPlaceholder: "粘贴错误消息...", context: "上下文", contextPlaceholder: "附加上下文（环境、版本等）",
        stackTrace: "堆栈跟踪", stackPlaceholder: "如果有堆栈跟踪请粘贴...", diagnose: "诊断", diagnosing: "诊断中...",
        chatPlaceholder: "询问DevOps问题...", send: "发送", emptyTitle: "暂无输出", emptyDesc: "配置输入并运行分析",
        dockerfile: "Dockerfile", docker_compose: "Docker Compose", kubernetes: "Kubernetes", helm: "Helm Chart",
        github_actions: "GitHub Actions", gitlab_ci: "GitLab CI", jenkins: "Jenkinsfile", terraform: "Terraform",
        ansible: "Ansible", nginx: "Nginx", prometheus: "Prometheus", grafana: "Grafana",
        welcome: "您好！我是DevOps助手：\n\n• Docker & Kubernetes配置\n• CI/CD管道\n• IaC（Terraform、Ansible）\n• 日志分析 & 监控\n• 错误诊断 & 故障排除\n• 安全最佳实践",
        copyCode: "复制", copied: "已复制!", downloadCode: "下载", clearHistory: "清除历史",
        presets: "快速模板", presetPython: "Python应用", presetNode: "Node.js应用", presetJava: "Java/Spring",
        presetGo: "Go服务", presetMicroservices: "微服务", presetML: "ML管道",
        historyEmpty: "暂无历史", historyItem: "已生成", deleteHistory: "删除",
        metrics: "指标", alerts: "告警", dashboards: "仪表板", runbooks: "运维手册",
        monitorType: "监控类型", generateMonitor: "生成监控配置",
        severity: "严重程度", timeRange: "时间范围", errorType: "错误类型",
        rootCause: "根本原因", solution: "解决方案", steps: "解决步骤", prevention: "预防",
        validationError: "验证错误", required: "此字段为必填",
        outputFormat: "输出格式", yamlFormat: "YAML", jsonFormat: "JSON", hclFormat: "HCL",
        includeComments: "包含注释", includeExamples: "包含示例", productionReady: "生产就绪"
    },
    es: {
        title: "Asistente DevOps IA", subtitle: "Análisis de logs, generación de config, diagnóstico de errores", inputPanel: "ENTRADA", outputPanel: "SALIDA",
        tabConfig: "Config", tabLogs: "Logs", tabDiagnose: "Diagnóstico", tabMonitor: "Monitoreo", tabChat: "Chat", tabHistory: "Historial",
        configType: "Tipo de Config", description: "Descripción", descPlaceholder: "Describe lo que necesitas...",
        requirements: "Requisitos", reqPlaceholder: "Ingresa requisitos (separados por coma)",
        generate: "Generar", generating: "Generando...",
        logs: "Contenido de Log", logsPlaceholder: "Pega tus logs aquí...", logType: "Tipo de Log", analyze: "Analizar", analyzing: "Analizando...",
        errorMsg: "Mensaje de Error", errorPlaceholder: "Pega el mensaje de error...", context: "Contexto", contextPlaceholder: "Contexto adicional (entorno, versión, etc.)",
        stackTrace: "Stack Trace", stackPlaceholder: "Pega el stack trace si está disponible...", diagnose: "Diagnosticar", diagnosing: "Diagnosticando...",
        chatPlaceholder: "Pregunta sobre DevOps...", send: "Enviar", emptyTitle: "Sin Salida Aún", emptyDesc: "Configura tu entrada y ejecuta el análisis",
        dockerfile: "Dockerfile", docker_compose: "Docker Compose", kubernetes: "Kubernetes", helm: "Helm Chart",
        github_actions: "GitHub Actions", gitlab_ci: "GitLab CI", jenkins: "Jenkinsfile", terraform: "Terraform",
        ansible: "Ansible", nginx: "Nginx", prometheus: "Prometheus", grafana: "Grafana",
        welcome: "¡Hola! Soy tu asistente DevOps:\n\n• Configs de Docker & Kubernetes\n• Pipelines CI/CD\n• IaC (Terraform, Ansible)\n• Análisis de logs & monitoreo\n• Diagnóstico de errores\n• Mejores prácticas de seguridad",
        copyCode: "Copiar", copied: "¡Copiado!", downloadCode: "Descargar", clearHistory: "Borrar Historial",
        presets: "Plantillas Rápidas", presetPython: "App Python", presetNode: "App Node.js", presetJava: "Java/Spring",
        presetGo: "Servicio Go", presetMicroservices: "Microservicios", presetML: "Pipeline ML",
        historyEmpty: "Sin historial", historyItem: "Generado", deleteHistory: "Eliminar",
        metrics: "Métricas", alerts: "Alertas", dashboards: "Dashboards", runbooks: "Runbooks",
        monitorType: "Tipo de Monitoreo", generateMonitor: "Generar Config de Monitoreo",
        severity: "Severidad", timeRange: "Rango de Tiempo", errorType: "Tipo de Error",
        rootCause: "Causa Raíz", solution: "Solución", steps: "Pasos de Resolución", prevention: "Prevención",
        validationError: "Error de Validación", required: "Este campo es obligatorio",
        outputFormat: "Formato de Salida", yamlFormat: "YAML", jsonFormat: "JSON", hclFormat: "HCL",
        includeComments: "Incluir Comentarios", includeExamples: "Incluir Ejemplos", productionReady: "Listo para Producción"
    },
    fr: {
        title: "Assistant DevOps IA", subtitle: "Analyse de logs, génération de config, diagnostic d'erreurs", inputPanel: "ENTRÉE", outputPanel: "SORTIE",
        tabConfig: "Config", tabLogs: "Logs", tabDiagnose: "Diagnostic", tabMonitor: "Monitoring", tabChat: "Chat", tabHistory: "Historique",
        configType: "Type de Config", description: "Description", descPlaceholder: "Décrivez ce dont vous avez besoin...",
        requirements: "Exigences", reqPlaceholder: "Entrez les exigences (séparées par virgule)",
        generate: "Générer", generating: "Génération...",
        logs: "Contenu des Logs", logsPlaceholder: "Collez vos logs ici...", logType: "Type de Log", analyze: "Analyser", analyzing: "Analyse...",
        errorMsg: "Message d'Erreur", errorPlaceholder: "Collez le message d'erreur...", context: "Contexte", contextPlaceholder: "Contexte additionnel (environnement, version, etc.)",
        stackTrace: "Stack Trace", stackPlaceholder: "Collez le stack trace si disponible...", diagnose: "Diagnostiquer", diagnosing: "Diagnostic...",
        chatPlaceholder: "Posez des questions sur DevOps...", send: "Envoyer", emptyTitle: "Pas de Sortie", emptyDesc: "Configurez votre entrée et lancez l'analyse",
        dockerfile: "Dockerfile", docker_compose: "Docker Compose", kubernetes: "Kubernetes", helm: "Helm Chart",
        github_actions: "GitHub Actions", gitlab_ci: "GitLab CI", jenkins: "Jenkinsfile", terraform: "Terraform",
        ansible: "Ansible", nginx: "Nginx", prometheus: "Prometheus", grafana: "Grafana",
        welcome: "Bonjour! Je suis votre assistant DevOps:\n\n• Configs Docker & Kubernetes\n• Pipelines CI/CD\n• IaC (Terraform, Ansible)\n• Analyse de logs & monitoring\n• Diagnostic d'erreurs\n• Meilleures pratiques de sécurité",
        copyCode: "Copier", copied: "Copié!", downloadCode: "Télécharger", clearHistory: "Effacer l'Historique",
        presets: "Modèles Rapides", presetPython: "App Python", presetNode: "App Node.js", presetJava: "Java/Spring",
        presetGo: "Service Go", presetMicroservices: "Microservices", presetML: "Pipeline ML",
        historyEmpty: "Pas d'historique", historyItem: "Généré", deleteHistory: "Supprimer",
        metrics: "Métriques", alerts: "Alertes", dashboards: "Tableaux de bord", runbooks: "Runbooks",
        monitorType: "Type de Monitoring", generateMonitor: "Générer Config Monitoring",
        severity: "Sévérité", timeRange: "Plage de Temps", errorType: "Type d'Erreur",
        rootCause: "Cause Racine", solution: "Solution", steps: "Étapes de Résolution", prevention: "Prévention",
        validationError: "Erreur de Validation", required: "Ce champ est obligatoire",
        outputFormat: "Format de Sortie", yamlFormat: "YAML", jsonFormat: "JSON", hclFormat: "HCL",
        includeComments: "Inclure Commentaires", includeExamples: "Inclure Exemples", productionReady: "Prêt pour Production"
    },
    de: {
        title: "KI DevOps-Assistent", subtitle: "Log-Analyse, Config-Generierung, Fehlerdiagnose", inputPanel: "EINGABE", outputPanel: "AUSGABE",
        tabConfig: "Config", tabLogs: "Logs", tabDiagnose: "Diagnose", tabMonitor: "Monitoring", tabChat: "Chat", tabHistory: "Verlauf",
        configType: "Config-Typ", description: "Beschreibung", descPlaceholder: "Beschreiben Sie was Sie brauchen...",
        requirements: "Anforderungen", reqPlaceholder: "Anforderungen eingeben (kommagetrennt)",
        generate: "Generieren", generating: "Generiere...",
        logs: "Log-Inhalt", logsPlaceholder: "Logs hier einfügen...", logType: "Log-Typ", analyze: "Analysieren", analyzing: "Analysiere...",
        errorMsg: "Fehlermeldung", errorPlaceholder: "Fehlermeldung einfügen...", context: "Kontext", contextPlaceholder: "Zusätzlicher Kontext (Umgebung, Version, etc.)",
        stackTrace: "Stack Trace", stackPlaceholder: "Stack Trace falls verfügbar einfügen...", diagnose: "Diagnostizieren", diagnosing: "Diagnostiziere...",
        chatPlaceholder: "Fragen zu DevOps...", send: "Senden", emptyTitle: "Keine Ausgabe", emptyDesc: "Konfigurieren Sie Ihre Eingabe und führen Sie die Analyse aus",
        dockerfile: "Dockerfile", docker_compose: "Docker Compose", kubernetes: "Kubernetes", helm: "Helm Chart",
        github_actions: "GitHub Actions", gitlab_ci: "GitLab CI", jenkins: "Jenkinsfile", terraform: "Terraform",
        ansible: "Ansible", nginx: "Nginx", prometheus: "Prometheus", grafana: "Grafana",
        welcome: "Hallo! Ich bin Ihr DevOps-Assistent:\n\n• Docker & Kubernetes Configs\n• CI/CD Pipelines\n• IaC (Terraform, Ansible)\n• Log-Analyse & Monitoring\n• Fehlerdiagnose\n• Security Best Practices",
        copyCode: "Kopieren", copied: "Kopiert!", downloadCode: "Herunterladen", clearHistory: "Verlauf Löschen",
        presets: "Schnellvorlagen", presetPython: "Python App", presetNode: "Node.js App", presetJava: "Java/Spring",
        presetGo: "Go Service", presetMicroservices: "Microservices", presetML: "ML Pipeline",
        historyEmpty: "Kein Verlauf", historyItem: "Generiert", deleteHistory: "Löschen",
        metrics: "Metriken", alerts: "Warnungen", dashboards: "Dashboards", runbooks: "Runbooks",
        monitorType: "Monitoring-Typ", generateMonitor: "Monitoring Config Generieren",
        severity: "Schweregrad", timeRange: "Zeitbereich", errorType: "Fehlertyp",
        rootCause: "Grundursache", solution: "Lösung", steps: "Lösungsschritte", prevention: "Prävention",
        validationError: "Validierungsfehler", required: "Dieses Feld ist erforderlich",
        outputFormat: "Ausgabeformat", yamlFormat: "YAML", jsonFormat: "JSON", hclFormat: "HCL",
        includeComments: "Kommentare Einschließen", includeExamples: "Beispiele Einschließen", productionReady: "Produktionsreif"
    }
};

const presets = {
    python: {
        description: { en: "Python web application with FastAPI, PostgreSQL, Redis, and Celery for background tasks", ko: "FastAPI, PostgreSQL, Redis, Celery를 사용하는 Python 웹 애플리케이션", ja: "FastAPI、PostgreSQL、Redis、Celeryを使用するPythonウェブアプリケーション", zh: "使用FastAPI、PostgreSQL、Redis和Celery的Python Web应用", es: "Aplicación web Python con FastAPI, PostgreSQL, Redis y Celery", fr: "Application web Python avec FastAPI, PostgreSQL, Redis et Celery", de: "Python Web-Anwendung mit FastAPI, PostgreSQL, Redis und Celery" },
        requirements: "python 3.11, fastapi, uvicorn, postgresql, redis, celery, alembic, pytest"
    },
    node: {
        description: { en: "Node.js application with Express, MongoDB, Redis cache, and PM2 process manager", ko: "Express, MongoDB, Redis 캐시, PM2를 사용하는 Node.js 애플리케이션", ja: "Express、MongoDB、Redisキャッシュ、PM2を使用するNode.jsアプリケーション", zh: "使用Express、MongoDB、Redis缓存和PM2的Node.js应用", es: "Aplicación Node.js con Express, MongoDB, Redis y PM2", fr: "Application Node.js avec Express, MongoDB, Redis et PM2", de: "Node.js Anwendung mit Express, MongoDB, Redis und PM2" },
        requirements: "node 20, express, mongodb, redis, pm2, jest, eslint"
    },
    java: {
        description: { en: "Java Spring Boot microservice with MySQL, RabbitMQ, and Gradle build", ko: "MySQL, RabbitMQ, Gradle 빌드를 사용하는 Java Spring Boot 마이크로서비스", ja: "MySQL、RabbitMQ、GradleビルドのJava Spring Bootマイクロサービス", zh: "使用MySQL、RabbitMQ和Gradle的Java Spring Boot微服务", es: "Microservicio Java Spring Boot con MySQL, RabbitMQ y Gradle", fr: "Microservice Java Spring Boot avec MySQL, RabbitMQ et Gradle", de: "Java Spring Boot Microservice mit MySQL, RabbitMQ und Gradle" },
        requirements: "java 21, spring boot 3.2, gradle, mysql, rabbitmq, junit5"
    },
    go: {
        description: { en: "Go service with Gin framework, PostgreSQL, gRPC support, and health checks", ko: "Gin 프레임워크, PostgreSQL, gRPC, 헬스체크를 사용하는 Go 서비스", ja: "Ginフレームワーク、PostgreSQL、gRPCサポート、ヘルスチェックを含むGoサービス", zh: "使用Gin框架、PostgreSQL、gRPC和健康检查的Go服务", es: "Servicio Go con Gin, PostgreSQL, gRPC y health checks", fr: "Service Go avec Gin, PostgreSQL, gRPC et health checks", de: "Go Service mit Gin Framework, PostgreSQL, gRPC und Health Checks" },
        requirements: "go 1.22, gin, gorm, postgresql, grpc, prometheus metrics"
    },
    microservices: {
        description: { en: "Kubernetes-native microservices architecture with service mesh, API gateway, and observability", ko: "서비스 메시, API 게이트웨이, 관측성을 갖춘 쿠버네티스 네이티브 마이크로서비스 아키텍처", ja: "サービスメッシュ、APIゲートウェイ、オブザーバビリティを備えたKubernetesネイティブマイクロサービスアーキテクチャ", zh: "具有服务网格、API网关和可观测性的Kubernetes原生微服务架构", es: "Arquitectura de microservicios Kubernetes-nativa con service mesh, API gateway y observabilidad", fr: "Architecture microservices Kubernetes-native avec service mesh, API gateway et observabilité", de: "Kubernetes-native Microservices-Architektur mit Service Mesh, API Gateway und Observability" },
        requirements: "kubernetes, istio, kong, prometheus, grafana, jaeger, argocd"
    },
    ml: {
        description: { en: "ML pipeline with model training, serving, and A/B testing using MLflow and KServe", ko: "MLflow, KServe를 사용한 모델 학습, 서빙, A/B 테스팅 ML 파이프라인", ja: "MLflowとKServeを使用したモデルトレーニング、サービング、A/BテストのMLパイプライン", zh: "使用MLflow和KServe的模型训练、服务和A/B测试ML管道", es: "Pipeline ML con entrenamiento, serving y A/B testing usando MLflow y KServe", fr: "Pipeline ML avec entraînement, serving et A/B testing utilisant MLflow et KServe", de: "ML Pipeline mit Model Training, Serving und A/B Testing mit MLflow und KServe" },
        requirements: "python 3.11, pytorch, mlflow, kserve, minio, postgresql"
    }
};

let currentLang = localStorage.getItem('devopsLang') || 'en';
let currentTab = 'config';
let chatHistory = [];
let generationHistory = JSON.parse(localStorage.getItem('devopsHistory') || '[]');
let lastGeneratedOutput = null;

document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    addWelcomeMessage();
});

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('devopsLang', lang);
    const t = i18n[lang];
    document.getElementById('title').textContent = t.title;
    document.getElementById('subtitle').textContent = t.subtitle;
    document.getElementById('inputPanelTitle').textContent = t.inputPanel;
    document.getElementById('outputPanelTitle').textContent = t.outputPanel;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
    updateTabs();
    updateForm();
}

function updateTabs() {
    const t = i18n[currentLang];
    document.getElementById('tabConfig').textContent = t.tabConfig;
    document.getElementById('tabLogs').textContent = t.tabLogs;
    document.getElementById('tabDiagnose').textContent = t.tabDiagnose;
    document.getElementById('tabMonitor').textContent = t.tabMonitor;
    document.getElementById('tabChat').textContent = t.tabChat;
    document.getElementById('tabHistory').textContent = t.tabHistory;
}

function showTab(tab) {
    currentTab = tab;
    document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    updateForm();
}

function updateForm() {
    const t = i18n[currentLang];
    const form = document.getElementById('formContainer');
    const configTypes = ['dockerfile', 'docker_compose', 'kubernetes', 'helm', 'github_actions', 'gitlab_ci', 'jenkins', 'terraform', 'ansible', 'nginx', 'prometheus', 'grafana'];
    const monitorTypes = ['metrics', 'alerts', 'dashboards', 'runbooks'];

    if (currentTab === 'config') {
        form.innerHTML = `
            <div class="presets-section">
                <label class="form-label">${t.presets}</label>
                <div class="preset-chips">
                    <span class="preset-chip" onclick="applyPreset('python')">🐍 ${t.presetPython}</span>
                    <span class="preset-chip" onclick="applyPreset('node')">📦 ${t.presetNode}</span>
                    <span class="preset-chip" onclick="applyPreset('java')">☕ ${t.presetJava}</span>
                    <span class="preset-chip" onclick="applyPreset('go')">🔷 ${t.presetGo}</span>
                    <span class="preset-chip" onclick="applyPreset('microservices')">🌐 ${t.presetMicroservices}</span>
                    <span class="preset-chip" onclick="applyPreset('ml')">🤖 ${t.presetML}</span>
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">${t.configType}</label>
                <div class="chips">
                    ${configTypes.map((type, i) => `<span class="chip ${i === 0 ? 'active' : ''}" data-value="${type}" onclick="selectChip(this, 'config')">${t[type]}</span>`).join('')}
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">${t.description} <span class="required">*</span></label>
                <textarea id="descInput" class="form-textarea" rows="4" placeholder="${t.descPlaceholder}"></textarea>
            </div>
            <div class="form-group">
                <label class="form-label">${t.requirements}</label>
                <input type="text" id="reqInput" class="form-input" placeholder="${t.reqPlaceholder}">
            </div>
            <div class="form-group checkbox-group">
                <label class="checkbox-label"><input type="checkbox" id="commentsCheck" checked> ${t.includeComments}</label>
                <label class="checkbox-label"><input type="checkbox" id="productionCheck"> ${t.productionReady}</label>
            </div>
            <button id="generateBtn" class="btn btn-primary btn-full" onclick="generateConfig()">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
                ${t.generate}
            </button>`;
    } else if (currentTab === 'logs') {
        form.innerHTML = `
            <div class="form-group">
                <label class="form-label">${t.logs} <span class="required">*</span></label>
                <textarea id="logsInput" class="form-textarea code-input" rows="12" placeholder="${t.logsPlaceholder}"></textarea>
            </div>
            <div class="form-group">
                <label class="form-label">${t.logType}</label>
                <div class="chips">
                    <span class="chip active" data-value="auto" onclick="selectChip(this, 'logType')">Auto-detect</span>
                    <span class="chip" data-value="nginx" onclick="selectChip(this, 'logType')">Nginx</span>
                    <span class="chip" data-value="kubernetes" onclick="selectChip(this, 'logType')">Kubernetes</span>
                    <span class="chip" data-value="docker" onclick="selectChip(this, 'logType')">Docker</span>
                    <span class="chip" data-value="application" onclick="selectChip(this, 'logType')">Application</span>
                    <span class="chip" data-value="system" onclick="selectChip(this, 'logType')">System</span>
                </div>
            </div>
            <button id="analyzeBtn" class="btn btn-primary btn-full" onclick="analyzeLogs()">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                ${t.analyze}
            </button>`;
    } else if (currentTab === 'diagnose') {
        form.innerHTML = `
            <div class="form-group">
                <label class="form-label">${t.errorMsg} <span class="required">*</span></label>
                <textarea id="errorInput" class="form-textarea code-input" rows="4" placeholder="${t.errorPlaceholder}"></textarea>
            </div>
            <div class="form-group">
                <label class="form-label">${t.errorType}</label>
                <div class="chips">
                    <span class="chip active" data-value="auto" onclick="selectChip(this, 'errorType')">Auto-detect</span>
                    <span class="chip" data-value="build" onclick="selectChip(this, 'errorType')">Build</span>
                    <span class="chip" data-value="runtime" onclick="selectChip(this, 'errorType')">Runtime</span>
                    <span class="chip" data-value="network" onclick="selectChip(this, 'errorType')">Network</span>
                    <span class="chip" data-value="database" onclick="selectChip(this, 'errorType')">Database</span>
                    <span class="chip" data-value="permission" onclick="selectChip(this, 'errorType')">Permission</span>
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">${t.context}</label>
                <input type="text" id="contextInput" class="form-input" placeholder="${t.contextPlaceholder}">
            </div>
            <div class="form-group">
                <label class="form-label">${t.stackTrace}</label>
                <textarea id="stackInput" class="form-textarea code-input" rows="4" placeholder="${t.stackPlaceholder}"></textarea>
            </div>
            <button id="diagnoseBtn" class="btn btn-primary btn-full" onclick="diagnoseError()">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
                ${t.diagnose}
            </button>`;
    } else if (currentTab === 'monitor') {
        form.innerHTML = `
            <div class="form-group">
                <label class="form-label">${t.monitorType}</label>
                <div class="chips">
                    ${monitorTypes.map((type, i) => `<span class="chip ${i === 0 ? 'active' : ''}" data-value="${type}" onclick="selectChip(this, 'monitor')">${t[type]}</span>`).join('')}
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">${t.description} <span class="required">*</span></label>
                <textarea id="monitorDescInput" class="form-textarea" rows="4" placeholder="${t.descPlaceholder}"></textarea>
            </div>
            <div class="form-group">
                <label class="form-label">${t.requirements}</label>
                <input type="text" id="monitorReqInput" class="form-input" placeholder="e.g., CPU, memory, request latency, error rate">
            </div>
            <button id="monitorBtn" class="btn btn-primary btn-full" onclick="generateMonitor()">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
                ${t.generateMonitor}
            </button>`;
    } else if (currentTab === 'chat') {
        form.innerHTML = `
            <div id="chatMessages" class="chat-messages"></div>
            <div class="chat-input-container">
                <input type="text" id="chatInput" class="form-input" placeholder="${t.chatPlaceholder}" onkeypress="if(event.key==='Enter')sendMessage()">
                <button class="btn btn-primary" onclick="sendMessage()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                    ${t.send}
                </button>
            </div>`;
        renderChatMessages();
    } else if (currentTab === 'history') {
        renderHistoryTab();
    }
}

function applyPreset(presetName) {
    const preset = presets[presetName];
    if (!preset) return;

    document.getElementById('descInput').value = preset.description[currentLang] || preset.description.en;
    document.getElementById('reqInput').value = preset.requirements;

    showNotification(i18n[currentLang].presets + ' applied!', 'success');
}

function selectChip(el, group) {
    el.parentElement.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
}

function getSelectedChip(container) {
    return container?.querySelector('.chip.active')?.dataset.value;
}

async function generateConfig() {
    const t = i18n[currentLang];
    const btn = document.getElementById('generateBtn');
    const output = document.getElementById('outputContainer');
    const descInput = document.getElementById('descInput');

    if (!descInput.value.trim()) {
        showNotification(t.validationError + ': ' + t.required, 'error');
        descInput.focus();
        return;
    }

    btn.disabled = true;
    btn.innerHTML = `<span class="btn-spinner"></span>${t.generating}`;
    output.innerHTML = `<div class="loading"><div class="spinner"></div><span>${t.generating}</span></div>`;

    try {
        const configChips = document.querySelector('.form-group:nth-child(2) .chips');
        const requestData = {
            config_type: getSelectedChip(configChips) || 'dockerfile',
            description: descInput.value,
            requirements: document.getElementById('reqInput').value.split(',').map(r => r.trim()).filter(r => r),
            include_comments: document.getElementById('commentsCheck')?.checked ?? true,
            production_ready: document.getElementById('productionCheck')?.checked ?? false,
            language: currentLang
        };

        const res = await fetch('/api/config', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestData)
        });

        const data = await res.json();

        if (data.error) {
            throw new Error(data.error);
        }

        lastGeneratedOutput = { type: 'config', data, request: requestData };
        addToHistory('config', requestData.config_type, data);
        renderConfigOutput(data);
    } catch (e) {
        output.innerHTML = `<div class="error-state"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg><h3>Error</h3><p>${e.message}</p></div>`;
    }

    btn.disabled = false;
    btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>${t.generate}`;
}

function renderConfigOutput(data) {
    const t = i18n[currentLang];
    const output = document.getElementById('outputContainer');

    output.innerHTML = `
        <div class="output-header">
            <h3>${data.config_type?.toUpperCase() || 'Configuration'}</h3>
            <div class="output-actions">
                <button class="btn btn-sm" onclick="copyOutput()">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    ${t.copyCode}
                </button>
                <button class="btn btn-sm" onclick="downloadOutput()">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    ${t.downloadCode}
                </button>
            </div>
        </div>

        <pre class="code-block"><code>${escapeHtml(data.config || data.content || JSON.stringify(data, null, 2))}</code></pre>

        ${data.explanation ? `<div class="explanation"><p>${data.explanation}</p></div>` : ''}

        ${data.best_practices?.length ? `
            <div class="section-header"><h4>Best Practices</h4></div>
            <ul class="best-practices-list">
                ${data.best_practices.map(bp => `<li>${bp}</li>`).join('')}
            </ul>
        ` : ''}

        ${data.warnings?.length ? `
            <div class="section-header"><h4>Warnings</h4></div>
            <div class="warnings-list">
                ${data.warnings.map(w => `<div class="warning-item">${w}</div>`).join('')}
            </div>
        ` : ''}`;
}

async function analyzeLogs() {
    const t = i18n[currentLang];
    const btn = document.getElementById('analyzeBtn');
    const output = document.getElementById('outputContainer');
    const logsInput = document.getElementById('logsInput');

    if (!logsInput.value.trim()) {
        showNotification(t.validationError + ': ' + t.required, 'error');
        logsInput.focus();
        return;
    }

    btn.disabled = true;
    btn.innerHTML = `<span class="btn-spinner"></span>${t.analyzing}`;
    output.innerHTML = `<div class="loading"><div class="spinner"></div><span>${t.analyzing}</span></div>`;

    try {
        const logTypeChips = document.querySelectorAll('.form-group')[1].querySelector('.chips');
        const requestData = {
            logs: logsInput.value,
            log_type: getSelectedChip(logTypeChips) || 'auto',
            language: currentLang
        };

        const res = await fetch('/api/logs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestData)
        });

        const data = await res.json();

        if (data.error) {
            throw new Error(data.error);
        }

        lastGeneratedOutput = { type: 'logs', data, request: requestData };
        addToHistory('logs', requestData.log_type, data);
        renderLogsOutput(data);
    } catch (e) {
        output.innerHTML = `<div class="error-state"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg><h3>Error</h3><p>${e.message}</p></div>`;
    }

    btn.disabled = false;
    btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>${t.analyze}`;
}

function renderLogsOutput(data) {
    const t = i18n[currentLang];
    const output = document.getElementById('outputContainer');

    output.innerHTML = `
        <div class="output-header">
            <h3>Log Analysis</h3>
            <div class="output-actions">
                <button class="btn btn-sm" onclick="copyOutput()">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    ${t.copyCode}
                </button>
            </div>
        </div>

        ${data.summary ? `<p class="analysis-summary">${data.summary}</p>` : ''}

        ${data.issues?.length ? `
            <div class="section-header">
                <h4>Issues Found</h4>
                <span class="badge">${data.issues.length}</span>
            </div>
            <div class="issues-list">
                ${data.issues.map(issue => `
                    <div class="issue-item ${issue.level || 'info'}">
                        <div class="issue-header">
                            <span class="issue-level ${issue.level || 'info'}">${(issue.level || 'INFO').toUpperCase()}</span>
                            ${issue.timestamp ? `<span class="issue-time">${issue.timestamp}</span>` : ''}
                        </div>
                        <p class="issue-message">${issue.message}</p>
                        ${issue.suggestion ? `<p class="issue-suggestion">${issue.suggestion}</p>` : ''}
                    </div>
                `).join('')}
            </div>
        ` : '<p class="no-issues">No significant issues detected</p>'}

        ${data.root_cause ? `
            <div class="section-header"><h4>${t.rootCause}</h4></div>
            <div class="root-cause-box">${data.root_cause}</div>
        ` : ''}

        ${data.recommendations?.length ? `
            <div class="section-header"><h4>Recommendations</h4></div>
            <ul class="recommendations-list">
                ${data.recommendations.map(r => `<li>${r}</li>`).join('')}
            </ul>
        ` : ''}`;
}

async function diagnoseError() {
    const t = i18n[currentLang];
    const btn = document.getElementById('diagnoseBtn');
    const output = document.getElementById('outputContainer');
    const errorInput = document.getElementById('errorInput');

    if (!errorInput.value.trim()) {
        showNotification(t.validationError + ': ' + t.required, 'error');
        errorInput.focus();
        return;
    }

    btn.disabled = true;
    btn.innerHTML = `<span class="btn-spinner"></span>${t.diagnosing}`;
    output.innerHTML = `<div class="loading"><div class="spinner"></div><span>${t.diagnosing}</span></div>`;

    try {
        const errorTypeChips = document.querySelectorAll('.form-group')[1].querySelector('.chips');
        const requestData = {
            error_message: errorInput.value,
            error_type: getSelectedChip(errorTypeChips) || 'auto',
            context: document.getElementById('contextInput').value,
            stack_trace: document.getElementById('stackInput').value,
            language: currentLang
        };

        const res = await fetch('/api/diagnose', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestData)
        });

        const data = await res.json();

        if (data.error) {
            throw new Error(data.error);
        }

        lastGeneratedOutput = { type: 'diagnose', data, request: requestData };
        addToHistory('diagnose', requestData.error_type, data);
        renderDiagnoseOutput(data);
    } catch (e) {
        output.innerHTML = `<div class="error-state"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg><h3>Error</h3><p>${e.message}</p></div>`;
    }

    btn.disabled = false;
    btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>${t.diagnose}`;
}

function renderDiagnoseOutput(data) {
    const t = i18n[currentLang];
    const output = document.getElementById('outputContainer');

    output.innerHTML = `
        <div class="output-header">
            <h3>Diagnosis Result</h3>
            <div class="output-actions">
                <button class="btn btn-sm" onclick="copyOutput()">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    ${t.copyCode}
                </button>
            </div>
        </div>

        ${data.diagnosis ? `<p class="diagnosis-summary">${data.diagnosis}</p>` : ''}

        ${data.root_cause ? `
            <div class="diagnosis-section">
                <h4>${t.rootCause}</h4>
                <div class="diagnosis-box root-cause">${data.root_cause}</div>
            </div>
        ` : ''}

        ${data.solution ? `
            <div class="diagnosis-section">
                <h4>${t.solution}</h4>
                <div class="diagnosis-box solution">${data.solution}</div>
            </div>
        ` : ''}

        ${data.steps?.length ? `
            <div class="diagnosis-section">
                <h4>${t.steps}</h4>
                <ol class="steps-list">
                    ${data.steps.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>
        ` : ''}

        ${data.code_fix ? `
            <div class="diagnosis-section">
                <h4>Code Fix</h4>
                <pre class="code-block"><code>${escapeHtml(data.code_fix)}</code></pre>
            </div>
        ` : ''}

        ${data.prevention ? `
            <div class="diagnosis-section">
                <h4>${t.prevention}</h4>
                <div class="diagnosis-box prevention">${data.prevention}</div>
            </div>
        ` : ''}

        ${data.related_issues?.length ? `
            <div class="diagnosis-section">
                <h4>Related Issues</h4>
                <ul class="related-issues">
                    ${data.related_issues.map(issue => `<li><a href="${issue.url}" target="_blank">${issue.title}</a></li>`).join('')}
                </ul>
            </div>
        ` : ''}`;
}

async function generateMonitor() {
    const t = i18n[currentLang];
    const btn = document.getElementById('monitorBtn');
    const output = document.getElementById('outputContainer');
    const descInput = document.getElementById('monitorDescInput');

    if (!descInput.value.trim()) {
        showNotification(t.validationError + ': ' + t.required, 'error');
        descInput.focus();
        return;
    }

    btn.disabled = true;
    btn.innerHTML = `<span class="btn-spinner"></span>${t.generating}`;
    output.innerHTML = `<div class="loading"><div class="spinner"></div><span>${t.generating}</span></div>`;

    try {
        const monitorChips = document.querySelector('.form-group:first-child .chips');
        const requestData = {
            monitor_type: getSelectedChip(monitorChips) || 'metrics',
            description: descInput.value,
            requirements: document.getElementById('monitorReqInput').value.split(',').map(r => r.trim()).filter(r => r),
            language: currentLang
        };

        const res = await fetch('/api/monitor', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestData)
        });

        const data = await res.json();

        if (data.error) {
            throw new Error(data.error);
        }

        lastGeneratedOutput = { type: 'monitor', data, request: requestData };
        addToHistory('monitor', requestData.monitor_type, data);
        renderConfigOutput(data);
    } catch (e) {
        output.innerHTML = `<div class="error-state"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg><h3>Error</h3><p>${e.message}</p></div>`;
    }

    btn.disabled = false;
    btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>${t.generateMonitor}`;
}

function addWelcomeMessage() {
    chatHistory = [{ role: 'assistant', content: i18n[currentLang].welcome }];
}

async function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();

    if (!message) return;

    input.value = '';
    chatHistory.push({ role: 'user', content: message });
    renderChatMessages();

    const messagesContainer = document.getElementById('chatMessages');
    messagesContainer.innerHTML += `<div class="message assistant typing"><span class="typing-indicator"><span></span><span></span><span></span></span></div>`;
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    try {
        const res = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message,
                language: currentLang,
                history: chatHistory.slice(-10)
            })
        });

        const data = await res.json();
        chatHistory.push({ role: 'assistant', content: data.response });
    } catch (e) {
        chatHistory.push({ role: 'assistant', content: 'Error occurred. Please try again.' });
    }

    renderChatMessages();
}

function renderChatMessages() {
    const container = document.getElementById('chatMessages');
    if (!container) return;

    container.innerHTML = chatHistory.map(m => `
        <div class="message ${m.role}">
            ${m.role === 'assistant' ? '<div class="message-avatar">🤖</div>' : ''}
            <div class="message-content">${formatMessage(m.content)}</div>
        </div>
    `).join('');

    container.scrollTop = container.scrollHeight;
}

function formatMessage(content) {
    return content
        .replace(/\n/g, '<br>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/• /g, '&bull; ');
}

function renderHistoryTab() {
    const t = i18n[currentLang];
    const form = document.getElementById('formContainer');

    if (generationHistory.length === 0) {
        form.innerHTML = `
            <div class="empty-history">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <h3>${t.historyEmpty}</h3>
            </div>`;
        return;
    }

    form.innerHTML = `
        <div class="history-header">
            <span>${generationHistory.length} items</span>
            <button class="btn btn-sm btn-danger" onclick="clearHistory()">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
                ${t.clearHistory}
            </button>
        </div>
        <div class="history-list">
            ${generationHistory.map((item, index) => `
                <div class="history-item" onclick="loadHistoryItem(${index})">
                    <div class="history-item-header">
                        <span class="history-type-badge ${item.type}">${item.type}</span>
                        <span class="history-time">${formatTime(item.timestamp)}</span>
                    </div>
                    <div class="history-item-title">${escapeHtml(item.title)}</div>
                    <button class="history-delete" onclick="event.stopPropagation(); deleteHistoryItem(${index})">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
            `).join('')}
        </div>`;
}

function addToHistory(type, title, data) {
    generationHistory.unshift({
        type,
        title,
        data,
        timestamp: Date.now()
    });

    if (generationHistory.length > 50) {
        generationHistory = generationHistory.slice(0, 50);
    }

    localStorage.setItem('devopsHistory', JSON.stringify(generationHistory));
}

function loadHistoryItem(index) {
    const item = generationHistory[index];
    if (!item) return;

    lastGeneratedOutput = { type: item.type, data: item.data };

    switch (item.type) {
        case 'config':
        case 'monitor':
            renderConfigOutput(item.data);
            break;
        case 'logs':
            renderLogsOutput(item.data);
            break;
        case 'diagnose':
            renderDiagnoseOutput(item.data);
            break;
    }

    showNotification('Loaded from history', 'success');
}

function deleteHistoryItem(index) {
    generationHistory.splice(index, 1);
    localStorage.setItem('devopsHistory', JSON.stringify(generationHistory));
    renderHistoryTab();
}

function clearHistory() {
    generationHistory = [];
    localStorage.setItem('devopsHistory', '[]');
    renderHistoryTab();
    showNotification(i18n[currentLang].clearHistory, 'success');
}

function copyOutput() {
    const t = i18n[currentLang];
    let text = '';

    if (lastGeneratedOutput?.data) {
        if (typeof lastGeneratedOutput.data === 'string') {
            text = lastGeneratedOutput.data;
        } else if (lastGeneratedOutput.data.config) {
            text = lastGeneratedOutput.data.config;
        } else if (lastGeneratedOutput.data.content) {
            text = lastGeneratedOutput.data.content;
        } else {
            text = JSON.stringify(lastGeneratedOutput.data, null, 2);
        }
    }

    navigator.clipboard.writeText(text).then(() => {
        showNotification(t.copied, 'success');
    });
}

function downloadOutput() {
    if (!lastGeneratedOutput?.data) return;

    let content = '';
    let filename = `devops-${lastGeneratedOutput.type}-${Date.now()}`;
    let extension = 'txt';

    if (typeof lastGeneratedOutput.data === 'string') {
        content = lastGeneratedOutput.data;
    } else if (lastGeneratedOutput.data.config) {
        content = lastGeneratedOutput.data.config;
        const configType = lastGeneratedOutput.request?.config_type || '';
        if (configType.includes('dockerfile')) extension = 'dockerfile';
        else if (configType.includes('kubernetes') || configType.includes('helm')) extension = 'yaml';
        else if (configType.includes('terraform')) extension = 'tf';
        else if (configType.includes('nginx')) extension = 'conf';
        else extension = 'yaml';
    } else {
        content = JSON.stringify(lastGeneratedOutput.data, null, 2);
        extension = 'json';
    }

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.${extension}`;
    a.click();
    URL.revokeObjectURL(url);
}

function showNotification(message, type = 'info') {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">×</button>
    `;
    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function formatTime(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;

    if (diff < 60000) return 'Just now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;

    return date.toLocaleDateString();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
