// 📄 App.js
import React, { useState } from 'react';
import apiService from './apiService';

function App() {
    const [question, setQuestion] = useState('');
    const [responses, setResponses] = useState([]);
    const [sessionID, setSessionID] = useState(null);

    const askQuestion = async () => {
        try {
            const result = await apiService.sendQuestion(question);
            setResponses(result.responses);
            setSessionID(result.sessionFolder);
        } catch (error) {
            console.error("Error during question processing:", error);
        }
    };

    const endSession = async () => {
        if (sessionID) {
            await apiService.deleteSession(sessionID);
            setResponses([]);
            setSessionID(null);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Web3 Q&A App</h1>
            <textarea
                placeholder="Ask your question here..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                style={{ width: '100%', height: '80px' }}
            />
            <button onClick={askQuestion} style={{ margin: '10px' }}>Ask</button>
            <button onClick={endSession} style={{ margin: '10px' }} disabled={!sessionID}>End Session</button>

            <h2>Responses</h2>
            <div>
                {responses.length > 0 ? (
                    responses.map((response, index) => (
                        <p key={index}>AI {index + 1}: {response}</p>
                    ))
                ) : (
                    <p>No responses yet.</p>
                )}
            </div>
        </div>
    );
}

export default App;
