const crypto = require('crypto');

const SECRET = 'YashKumarMishra-REST-API';

 const authentication = (salt: string, password: string): string => {
  return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');
}

 const random = () => crypto.randomBytes(128).toString('base64');

 module.exports={authentication,random}
