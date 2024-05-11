const validate = require('./validate.js')

const formatTime = date => {
	//13位时间戳
	if (data.toString().length == 10) {
		data = data * 1000
	}
	let date = new Date(data * 1)
	let year = date.getFullYear()
	let month = date.getMonth() + 1
	let day = date.getDate()
	let hour = date.getHours()
	let minute = date.getMinutes()
	//补0
	month = month < 10 ? '0' + month : month
	day = day < 10 ? '0' + day : day
	hour = hour < 10 ? '0' + hour : hour
	minute = minute < 10 ? '0' + minute : minute
	//格式
	return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute].map(formatNumber).join(':')
}
const formatNumber = n => {
	n = n.toString()
	return n[1] ? n : '0' + n
}
//空值过滤器
const filterForm = form => {
	let obj = {}
	Object.keys(form).forEach(ele => {
		if (!validate.validatenull(form[ele])) {
			obj[ele] = form[ele]
		}
	})
	return obj
}
//获取当前页面带参数的url
const getCurrentPageUrlWithArgs = val => {
	const pages = getCurrentPages()
	const currentPage = pages[pages.length - 1]
	const url = currentPage.route
	const options = currentPage.options
	let urlWithArgs = `/${url}?`

	for (let key in options) {
		const value = options[key]
		urlWithArgs += `${key}=${value}&`
	}

	urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length - 1)
	return urlWithArgs
}
//获取url中的参数
const getUrlParam = (path, name) => {
	var reg = new RegExp('(^|\\?|&)' + name + '=([^&]*)(\\s|&|$)', 'i')
	if (reg.test(path)) return unescape(RegExp.$2.replace(/\+/g, ' '))
	return ''
}

//判断是否是小程序
const isMiniPg = () => {
	let isMiniPg = false
	// #ifdef MP-WEIXIN
	isMiniPg = true
	// #endif
	return isMiniPg
}
//重置url中的参数
const resetPageUrl = query => {
	var ary = []
	for (var p in query) {
		if (query.hasOwnProperty(p) && query[p]) {
			ary.push(encodeURIComponent(p) + '=' + encodeURIComponent(query[p]))
		}
	}
	if (ary.length > 0) {
		let url = '?' + ary.join('&')
		history.replaceState(history.state, null, url) //替换页面显示url
	}
}

const imgUrlToBase64 = imageUrl => {
	return new Promise((resolve, reject) => {
		try {
			uni.downloadFile({
				url: imageUrl + '?s=' + Math.random().toString(),
				success: res => {
					if (res.statusCode === 200) {
						// uni 如果是H5或者APP会自动转为base64返回
						resolve(res.tempFilePath)
					} else {
						reject(res.errMsg)
					}
				},
				fail(err) {
					reject(err)
				},
			})
		} catch (e) {
			console.log(e)
			resolve(imageUrl)
		}
	})
}

// 获取当前页面路由或 path
const getCurPage = pages => {
	let curPage = pages[pages.length - 1]
	return curPage.route
}

// 手机号敏感
const phoneXing = val => {
	if (val.length != 0) {
		return val.replace(/(\d{3})\d{4}(\d{4})/, '$1 **** $2')
	}
	return val
}

module.exports = {
	formatTime,
	filterForm,
	getCurrentPageUrlWithArgs,
	getUrlParam,
	isMiniPg,
	resetPageUrl,
	imgUrlToBase64,
	getCurPage,
	phoneXing,
}
