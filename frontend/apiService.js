// 📄 apiService.js
const apiUrl = 'http://localhost:3000/api';

const apiService = {
    async sendQuestion(question) {
        const response = await fetch(`${apiUrl}/question`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question })
        });
        if (!response.ok) {
            throw new Error('Failed to send question');
        }
        return await response.json();
    },

    async deleteSession(sessionID) {
        const response = await fetch(`${apiUrl}/session/${sessionID}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete session');
        }
    }
};

export default apiService;
