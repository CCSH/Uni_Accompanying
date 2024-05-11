/**
 * validate email
 * @param email
 * @returns {boolean}
 */
export function validateEmail(email) {
	const re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return re.test(email)
}
/**
 * 判断手机号码是否正确
 */

export function validateMobile(phone) {
	const re = /^1(3|4|5|7|8|9|6)\d{9}$/
	return re.test(phone)
}

/**
 * 判断是否为空
 */

export function validatenull(val) {
	if (typeof val === 'boolean') {
		return false
	}

	if (typeof val === 'number') {
		return false
	}

	if (val instanceof Array) {
		if (val.length == 0) return true
	} else if (val instanceof Object) {
		if (JSON.stringify(val) === '{}') return true
	} else {
		if (val == 'null' || val == null || val == 'undefined' || val == undefined || val == '') return true
		return false
	}

	return false
}
module.exports = {
	validatenull,
	validateEmail,
	validateMobile,
}
