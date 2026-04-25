/**
 * MyMacros — AI Dietitian Screen
 * Chat interface powered by Groq (llama-3.3-70b) with Indian nutrition awareness.
 */
const AIDietitianScreen = {
    messages: [],  // { role: 'user'|'ai', text, timestamp }
    isLoading: false,

    init() {
        document.getElementById('ai-back-btn')?.addEventListener('click', () => {
            App.navigateTo('insights');
        });

        const sendBtn   = document.getElementById('ai-send-btn');
        const inputEl   = document.getElementById('ai-input');

        const handleSend = () => {
            const text = inputEl.value.trim();
            if (!text || this.isLoading) return;
            inputEl.value = '';
            this._sendMessage(text);
        };

        sendBtn?.addEventListener('click', handleSend);
        inputEl?.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
            }
        });

        // Quick suggestion chips
        document.querySelectorAll('.ai-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                if (this.isLoading) return;
                const text = chip.dataset.prompt;
                document.getElementById('ai-input').value = text;
                this._sendMessage(text);
                document.getElementById('ai-input').value = '';
            });
        });
    },

    show() {
        // Show welcome state if no messages yet
        const welcomeEl = document.getElementById('ai-welcome');
        const chatEl    = document.getElementById('ai-chat-messages');
        if (this.messages.length === 0) {
            welcomeEl?.classList.remove('hidden');
            chatEl?.classList.add('hidden');
        } else {
            welcomeEl?.classList.add('hidden');
            chatEl?.classList.remove('hidden');
            this._renderMessages();
        }
        document.getElementById('ai-input')?.focus();
    },

    async _sendMessage(text) {
        if (!text || this.isLoading) return;

        // Hide welcome, show chat
        document.getElementById('ai-welcome')?.classList.add('hidden');
        const chatEl = document.getElementById('ai-chat-messages');
        chatEl?.classList.remove('hidden');

        // Add user message
        this.messages.push({ role: 'user', text, timestamp: new Date() });
        this._renderMessages();
        this._scrollToBottom();

        // Show loading
        this.isLoading = true;
        this._showTyping();

        // Build anonymous context from local storage
        const user    = Storage.getUser();
        const targets = Storage.getTargets();
        const today   = new Date().toISOString().split('T')[0];
        const totals  = Storage.getDayTotals ? Storage.getDayTotals(today) : {};

        const context = {
            goal:     user?.goal || null,
            weight:   user?.weight || null,
            calories: totals?.calories || 0,
            protein:  totals?.protein  || 0,
            carbs:    totals?.carbs    || 0,
            fat:      totals?.fat      || 0,
            fiber:    totals?.fiber    || 0,
            target:   targets?.calories || null
        };

        try {
            const token = localStorage.getItem('mymacros_token');
            const res = await fetch(`${CONFIG.BACKEND_URL}/api/ai/chat`, {
                method:  'POST',
                headers: {
                    'Content-Type':  'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ message: text, context })
            });

            this._hideTyping();

            if (!res.ok) {
                const err = await res.json().catch(() => ({}));
                const errMsg = err.message || 'AI service is unavailable right now. Please try again later.';
                this.messages.push({ role: 'ai', text: errMsg, isError: true, timestamp: new Date() });
            } else {
                const data = await res.json();
                this.messages.push({
                    role: 'ai',
                    text: data.reply,
                    disclaimer: data.disclaimer,
                    timestamp: new Date()
                });
            }
        } catch (_) {
            this._hideTyping();
            this.messages.push({
                role: 'ai',
                text: 'Could not connect to the AI service. Please check your connection and try again.',
                isError: true,
                timestamp: new Date()
            });
        } finally {
            this.isLoading = false;
            this._renderMessages();
            this._scrollToBottom();
        }
    },

    _renderMessages() {
        const chatEl = document.getElementById('ai-chat-messages');
        if (!chatEl) return;

        chatEl.innerHTML = this.messages.map((msg, idx) => {
            if (msg.role === 'user') {
                return `
                    <div class="ai-bubble ai-bubble-user">
                        <p>${this._escapeHtml(msg.text)}</p>
                    </div>`;
            }

            const errClass = msg.isError ? 'ai-bubble-error' : '';
            const disclaimer = msg.disclaimer
                ? `<p class="ai-disclaimer"><span class="material-icons-round" style="font-size:12px;vertical-align:middle;">info</span> ${this._escapeHtml(msg.disclaimer)}</p>`
                : '';

            return `
                <div class="ai-bubble ai-bubble-ai ${errClass}">
                    <p>${this._formatAIText(msg.text)}</p>
                    ${disclaimer}
                </div>`;
        }).join('');
    },

    _showTyping() {
        const chatEl = document.getElementById('ai-chat-messages');
        if (!chatEl) return;
        const typingEl = document.createElement('div');
        typingEl.id = 'ai-typing';
        typingEl.className = 'ai-bubble ai-bubble-ai ai-typing-bubble';
        typingEl.innerHTML = `
            <span class="ai-typing-dot"></span>
            <span class="ai-typing-dot"></span>
            <span class="ai-typing-dot"></span>`;
        chatEl.appendChild(typingEl);
        this._scrollToBottom();
    },

    _hideTyping() {
        document.getElementById('ai-typing')?.remove();
    },

    _scrollToBottom() {
        const chatEl = document.getElementById('ai-chat-messages');
        if (chatEl) chatEl.scrollTop = chatEl.scrollHeight;
    },

    _escapeHtml(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    },

    _formatAIText(text) {
        // Convert **bold**, *italic*, and newlines to HTML
        return this._escapeHtml(text)
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.+?)\*/g,     '<em>$1</em>')
            .replace(/\n/g,            '<br>');
    }
};
