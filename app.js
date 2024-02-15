const crypto = require('crypto');
const randomBytes = crypto.randomBytes(32);

const secretKey = randomBytes.toString('hex');

console.log(secretKey);
