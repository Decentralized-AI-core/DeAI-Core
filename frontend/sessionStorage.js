// 📄 sessionStorage.js
const sessionStorageService = {
    saveSessionData(sessionID, data) {
        sessionStorage.setItem(`session-${sessionID}`, JSON.stringify(data));
    },

    getSessionData(sessionID) {
        const data = sessionStorage.getItem(`session-${sessionID}`);
        return data ? JSON.parse(data) : null;
    },

    deleteSessionData(sessionID) {
        sessionStorage.removeItem(`session-${sessionID}`);
    }
};

export default sessionStorageService;
