// 📄 ipfsController.js
const { create } = require('ipfs-http-client');
const ipfs = create({ url: 'https://ipfs.infura.io:5001/api/v0' });

async function addToIPFS(content) {
    const { path } = await ipfs.add(content);
    return path;
}

async function deleteFromIPFS(path) {
    await ipfs.pin.rm(path);  // Unpin to make it removable
}

module.exports = { addToIPFS, deleteFromIPFS };
