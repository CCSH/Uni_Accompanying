import CryptoJS from 'crypto-js'
import utf8 from 'crypto-js/enc-utf8'

const KEY = 'xxx'
const IV = 'xxx'

let aes = {
	//aes加密
	encryptAES(str) {
		let key = utf8.parse(KEY) // 秘钥
		let iv = utf8.parse(IV) //向量iv

		let encrypt = CryptoJS.AES.encrypt(str, key, {
			iv: iv,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7,
		})
		let data = encrypt.toString(utf8)
		return data
	},

	//aes解密
	decryptAES(str) {
		let key = utf8.parse(KEY) // 秘钥
		let iv = utf8.parse(IV) //向量iv
		let content = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(str)) // 内容

		let decrypt = CryptoJS.AES.decrypt(content, key, {
			iv: iv,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7,
		})
		let data = decrypt.toString(utf8)
		return data
	},
}

export default aes
