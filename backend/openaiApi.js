// 📄 openaiApi.js
const axios = require('axios');

async function getAnswer(encryptedQuestion) {
    const response = await axios.post('https://api.openai.com/v1/completions', {
        prompt: encryptedQuestion,
        model: 'text-davinci-003',
    }, {
        headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }
    });
    return response.data.choices[0].text;
}

module.exports = { getAnswer };
