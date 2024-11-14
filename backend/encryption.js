// 📄 encryption.js
const openpgp = require('openpgp');

async function encrypt(message, publicKey) {
    const encrypted = await openpgp.encrypt({
        message: await openpgp.createMessage({ text: message }),
        encryptionKeys: await openpgp.readKey({ armoredKey: publicKey }),
    });
    return encrypted;
}

async function decrypt(encryptedMessage, privateKey, passphrase) {
    const privateKeyObj = await openpgp.decryptKey({
        privateKey: await openpgp.readKey({ armoredKey: privateKey }),
        passphrase,
    });
    const message = await openpgp.readMessage({ armoredMessage: encryptedMessage });
    const { data: decrypted } = await openpgp.decrypt({
        message,
        decryptionKeys: privateKeyObj,
    });
    return decrypted;
}

module.exports = { encrypt, decrypt };
