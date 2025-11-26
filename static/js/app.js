const i18n = {
    en: { title: "AI DevOps Assistant", subtitle: "Log analysis, config generation, error diagnosis", inputPanel: "INPUT", outputPanel: "OUTPUT", tabConfig: "Config", tabLogs: "Logs", tabDiagnose: "Diagnose", tabChat: "Chat",
        configType: "Config Type", description: "Description", descPlaceholder: "Describe what you need...", requirements: "Requirements", reqPlaceholder: "Enter requirements (optional)", generate: "Generate", generating: "Generating...",
        logs: "Log Content", logsPlaceholder: "Paste your logs here...", logType: "Log Type", analyze: "Analyze", analyzing: "Analyzing...",
        errorMsg: "Error Message", errorPlaceholder: "Paste the error message...", context: "Context", contextPlaceholder: "Additional context...", stackTrace: "Stack Trace", diagnose: "Diagnose", diagnosing: "Diagnosing...",
        chatPlaceholder: "Ask about DevOps...", send: "Send", emptyTitle: "No Output Yet", emptyDesc: "Configure your input and run the analysis",
        dockerfile: "Dockerfile", docker_compose: "Docker Compose", kubernetes: "Kubernetes", github_actions: "GitHub Actions", gitlab_ci: "GitLab CI", terraform: "Terraform", nginx: "Nginx", prometheus: "Prometheus",
        welcome: "Hi! I'm your DevOps assistant. I can help with:\n\n• Docker & Kubernetes configs\n• CI/CD pipelines\n• Log analysis\n• Error diagnosis\n• Infrastructure setup" },
    ko: { title: "AI DevOps 도우미", subtitle: "로그 분석, 설정 생성, 오류 진단", inputPanel: "입력", outputPanel: "출력", tabConfig: "설정", tabLogs: "로그", tabDiagnose: "진단", tabChat: "채팅",
        configType: "설정 유형", description: "설명", descPlaceholder: "필요한 것을 설명하세요...", requirements: "요구사항", reqPlaceholder: "요구사항 입력 (선택)", generate: "생성", generating: "생성 중...",
        logs: "로그 내용", logsPlaceholder: "로그를 붙여넣으세요...", logType: "로그 유형", analyze: "분석", analyzing: "분석 중...",
        errorMsg: "오류 메시지", errorPlaceholder: "오류 메시지를 붙여넣으세요...", context: "컨텍스트", contextPlaceholder: "추가 컨텍스트...", stackTrace: "스택 트레이스", diagnose: "진단", diagnosing: "진단 중...",
        chatPlaceholder: "DevOps에 대해 질문하세요...", send: "전송", emptyTitle: "출력 없음", emptyDesc: "입력을 구성하고 분석을 실행하세요",
        dockerfile: "Dockerfile", docker_compose: "Docker Compose", kubernetes: "Kubernetes", github_actions: "GitHub Actions", gitlab_ci: "GitLab CI", terraform: "Terraform", nginx: "Nginx", prometheus: "Prometheus",
        welcome: "안녕하세요! DevOps 도우미입니다. 다음을 도와드립니다:\n\n• Docker & Kubernetes 설정\n• CI/CD 파이프라인\n• 로그 분석\n• 오류 진단\n• 인프라 설정" },
    ja: { title: "AI DevOpsアシスタント", subtitle: "ログ分析、設定生成、エラー診断", inputPanel: "入力", outputPanel: "出力", tabConfig: "設定", tabLogs: "ログ", tabDiagnose: "診断", tabChat: "チャット",
        configType: "設定タイプ", description: "説明", descPlaceholder: "必要なものを説明...", requirements: "要件", reqPlaceholder: "要件を入力（オプション）", generate: "生成", generating: "生成中...",
        logs: "ログ内容", logsPlaceholder: "ログを貼り付け...", logType: "ログタイプ", analyze: "分析", analyzing: "分析中...",
        errorMsg: "エラーメッセージ", errorPlaceholder: "エラーメッセージを貼り付け...", context: "コンテキスト", contextPlaceholder: "追加コンテキスト...", stackTrace: "スタックトレース", diagnose: "診断", diagnosing: "診断中...",
        chatPlaceholder: "DevOpsについて質問...", send: "送信", emptyTitle: "出力なし", emptyDesc: "入力を設定して分析を実行",
        dockerfile: "Dockerfile", docker_compose: "Docker Compose", kubernetes: "Kubernetes", github_actions: "GitHub Actions", gitlab_ci: "GitLab CI", terraform: "Terraform", nginx: "Nginx", prometheus: "Prometheus",
        welcome: "こんにちは！DevOpsアシスタントです。以下をお手伝い：\n\n• Docker & Kubernetes設定\n• CI/CDパイプライン\n• ログ分析\n• エラー診断\n• インフラ設定" }
};
let currentLang = 'en', currentTab = 'config', chatHistory = [];
document.addEventListener('DOMContentLoaded', () => { setLanguage('en'); addWelcomeMessage(); });

function setLanguage(lang) {
    currentLang = lang;
    const t = i18n[lang];
    document.getElementById('title').textContent = t.title;
    document.getElementById('subtitle').textContent = t.subtitle;
    document.getElementById('inputPanelTitle').textContent = t.inputPanel;
    document.getElementById('outputPanelTitle').textContent = t.outputPanel;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
    updateTabs(); updateForm();
}

function updateTabs() {
    const t = i18n[currentLang];
    document.getElementById('tabConfig').textContent = t.tabConfig;
    document.getElementById('tabLogs').textContent = t.tabLogs;
    document.getElementById('tabDiagnose').textContent = t.tabDiagnose;
    document.getElementById('tabChat').textContent = t.tabChat;
}

function showTab(tab) { currentTab = tab; document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab)); updateForm(); }

function updateForm() {
    const t = i18n[currentLang], form = document.getElementById('formContainer');
    const types = ['dockerfile', 'docker_compose', 'kubernetes', 'github_actions', 'gitlab_ci', 'terraform', 'nginx', 'prometheus'];
    if (currentTab === 'config') {
        form.innerHTML = `
            <div class="form-group"><label class="form-label">${t.configType}</label>
                <div class="chips">${types.map((type, i) => `<span class="chip ${i === 0 ? 'active' : ''}" data-value="${type}" onclick="selectChip(this)">${t[type]}</span>`).join('')}</div>
            </div>
            <div class="form-group"><label class="form-label">${t.description}</label><textarea id="descInput" class="form-textarea" rows="4" placeholder="${t.descPlaceholder}"></textarea></div>
            <div class="form-group"><label class="form-label">${t.requirements}</label><input type="text" id="reqInput" class="form-input" placeholder="${t.reqPlaceholder}"></div>
            <button id="generateBtn" class="btn btn-primary" style="width:100%" onclick="generateConfig()">${t.generate}</button>`;
    } else if (currentTab === 'logs') {
        form.innerHTML = `
            <div class="form-group"><label class="form-label">${t.logs}</label><textarea id="logsInput" class="form-textarea" rows="10" placeholder="${t.logsPlaceholder}"></textarea></div>
            <div class="form-group"><label class="form-label">${t.logType}</label><input type="text" id="logTypeInput" class="form-input" placeholder="e.g., nginx, kubernetes, docker"></div>
            <button id="analyzeBtn" class="btn btn-primary" style="width:100%" onclick="analyzeLogs()">${t.analyze}</button>`;
    } else if (currentTab === 'diagnose') {
        form.innerHTML = `
            <div class="form-group"><label class="form-label">${t.errorMsg}</label><textarea id="errorInput" class="form-textarea" rows="4" placeholder="${t.errorPlaceholder}"></textarea></div>
            <div class="form-group"><label class="form-label">${t.context}</label><input type="text" id="contextInput" class="form-input" placeholder="${t.contextPlaceholder}"></div>
            <div class="form-group"><label class="form-label">${t.stackTrace}</label><textarea id="stackInput" class="form-textarea" rows="4"></textarea></div>
            <button id="diagnoseBtn" class="btn btn-primary" style="width:100%" onclick="diagnoseError()">${t.diagnose}</button>`;
    } else if (currentTab === 'chat') {
        form.innerHTML = `<div id="chatMessages" class="chat-messages"></div><div class="chat-input-container"><input type="text" id="chatInput" class="form-input" placeholder="${t.chatPlaceholder}" onkeypress="if(event.key==='Enter')sendMessage()"><button class="btn btn-primary" onclick="sendMessage()">${t.send}</button></div>`;
        renderChatMessages();
    }
}

function selectChip(el) { document.querySelectorAll('.chip').forEach(c => c.classList.remove('active')); el.classList.add('active'); }
function getSelectedChip() { return document.querySelector('.chip.active')?.dataset.value || 'dockerfile'; }

async function generateConfig() {
    const t = i18n[currentLang], btn = document.getElementById('generateBtn'), output = document.getElementById('outputContainer');
    btn.disabled = true; btn.textContent = t.generating;
    output.innerHTML = `<div class="loading"><div class="spinner"></div>${t.generating}</div>`;
    try {
        const res = await fetch('/api/config', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ config_type: getSelectedChip(), description: document.getElementById('descInput').value, requirements: document.getElementById('reqInput').value.split(',').filter(r => r.trim()), language: currentLang }) });
        const data = await res.json();
        output.innerHTML = `<div class="code-block">${data.config || data.content || JSON.stringify(data, null, 2)}</div>${data.explanation ? `<p style="margin-top:1rem;color:var(--text-secondary)">${data.explanation}</p>` : ''}`;
    } catch (e) { output.innerHTML = `<div class="empty-state"><p>Error: ${e.message}</p></div>`; }
    btn.disabled = false; btn.textContent = t.generate;
}

async function analyzeLogs() {
    const t = i18n[currentLang], btn = document.getElementById('analyzeBtn'), output = document.getElementById('outputContainer');
    btn.disabled = true; btn.textContent = t.analyzing;
    output.innerHTML = `<div class="loading"><div class="spinner"></div>${t.analyzing}</div>`;
    try {
        const res = await fetch('/api/logs', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ logs: document.getElementById('logsInput').value, log_type: document.getElementById('logTypeInput').value, language: currentLang }) });
        const data = await res.json();
        output.innerHTML = `<h3 style="margin-bottom:1rem">${data.summary || 'Analysis'}</h3>${(data.issues || []).map(i => `<div class="issue-item ${i.level}"><span class="issue-level ${i.level}">${i.level?.toUpperCase()}</span><p style="margin:0.5rem 0">${i.message}</p><p style="color:var(--text-secondary);font-size:0.8125rem">${i.suggestion}</p></div>`).join('')}${data.root_cause ? `<p style="margin-top:1rem"><strong>Root Cause:</strong> ${data.root_cause}</p>` : ''}`;
    } catch (e) { output.innerHTML = `<div class="empty-state"><p>Error: ${e.message}</p></div>`; }
    btn.disabled = false; btn.textContent = t.analyze;
}

async function diagnoseError() {
    const t = i18n[currentLang], btn = document.getElementById('diagnoseBtn'), output = document.getElementById('outputContainer');
    btn.disabled = true; btn.textContent = t.diagnosing;
    output.innerHTML = `<div class="loading"><div class="spinner"></div>${t.diagnosing}</div>`;
    try {
        const res = await fetch('/api/diagnose', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ error_message: document.getElementById('errorInput').value, context: document.getElementById('contextInput').value, stack_trace: document.getElementById('stackInput').value, language: currentLang }) });
        const data = await res.json();
        output.innerHTML = `<h3 style="margin-bottom:1rem">Diagnosis</h3><p>${data.diagnosis || ''}</p>${data.root_cause ? `<p style="margin-top:1rem"><strong>Root Cause:</strong> ${data.root_cause}</p>` : ''}${data.solution ? `<p style="margin-top:1rem"><strong>Solution:</strong> ${data.solution}</p>` : ''}${data.steps?.length ? `<h4 style="margin-top:1rem">Steps:</h4><ol style="padding-left:1.5rem;color:var(--text-secondary)">${data.steps.map(s => `<li>${s}</li>`).join('')}</ol>` : ''}`;
    } catch (e) { output.innerHTML = `<div class="empty-state"><p>Error: ${e.message}</p></div>`; }
    btn.disabled = false; btn.textContent = t.diagnose;
}

function addWelcomeMessage() { chatHistory = [{ role: 'assistant', content: i18n[currentLang].welcome }]; }
async function sendMessage() {
    const input = document.getElementById('chatInput'), message = input.value.trim();
    if (!message) return;
    input.value = ''; chatHistory.push({ role: 'user', content: message }); renderChatMessages();
    try {
        const res = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message, language: currentLang, history: chatHistory.slice(-10) }) });
        const data = await res.json();
        chatHistory.push({ role: 'assistant', content: data.response }); renderChatMessages();
    } catch (e) { chatHistory.push({ role: 'assistant', content: 'Error occurred.' }); renderChatMessages(); }
}
function renderChatMessages() {
    const container = document.getElementById('chatMessages');
    if (!container) return;
    container.innerHTML = chatHistory.map(m => `<div class="message ${m.role}">${m.content.replace(/\n/g, '<br>')}</div>`).join('');
    container.scrollTop = container.scrollHeight;
}
