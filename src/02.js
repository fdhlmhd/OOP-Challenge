const CryptoJS = require('crypto-js')

class Chiper {
    static encrypt (a , b) {
        return CryptoJS.AES.encrypt(a,b).toString()
    }

    static decrypt (a, b) {
        return CryptoJS.AES.decrypt(a,b).toString(CryptoJS.enc.Utf8)
    }
}

const message = Chiper.encrypt('Ini tulisan rahasia', 'p4$$w0rd');
console.log(message);

const decryptMessage = Chiper.decrypt(message, 'p4$$w0rd')
console.log(decryptMessage);