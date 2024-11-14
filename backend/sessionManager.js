// 📄 sessionManager.js
const ipfsController = require('./ipfsController');

async function createTemporarySessionFolder(data) {
    const content = JSON.stringify(data);
    return await ipfsController.addToIPFS(content);
}

async function deleteSessionFolder(path) {
    await ipfsController.deleteFromIPFS(path);
}

module.exports = { createTemporarySessionFolder, deleteSessionFolder };
