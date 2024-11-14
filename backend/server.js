// 📄 server.js
const express = require('express');
const ipfsController = require('./ipfsController');
const encryption = require('./encryption');
const openaiApi = require('./openaiApi');
const otherAiApis = require('./otherAiApis');
const sessionManager = require('./sessionManager');

const app = express();
app.use(express.json());

// Route to handle Q&A
app.post('/api/question', async (req, res) => {
    try {
        const { question } = req.body;
        const encryptedQuestion = encryption.encrypt(question);
        
        const response1 = await openaiApi.getAnswer(encryptedQuestion);
        const response2 = await otherAiApis.getAnswer(encryptedQuestion);
        
        const responses = [response1, response2].map(encryption.decrypt);

        const sessionFolder = await sessionManager.createTemporarySessionFolder(responses);
        res.status(200).json({ sessionFolder });
    } catch (error) {
        res.status(500).json({ error: 'Failed to process question' });
    }
});

// Route for session cleanup
app.delete('/api/session/:id', async (req, res) => {
    const { id } = req.params;
    await sessionManager.deleteSessionFolder(id);
    res.status(204).send();
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
