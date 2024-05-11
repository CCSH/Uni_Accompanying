const request = (url, method, data, showLoading) => {
	return new Promise((resolve, reject) => {
		//调试接口
		let showModal = false

		//统一处理
		let _data = {
			...data,
			userId: 'ccsh',
		}

		if (showLoading) {
			uni.showLoading({
				title: '加载中',
			})
		}
		uni.request({
			url: url,
			method: method || 'get',
			data: _data,
			withCredentials: true,
			header: {},
			success(res) {
				//解析响应
				let resData = JSON.parse(res.data)
				console.log(method + '请求：' + url, '\n入参：', _data, '\n响应：', resData)
				if (showModal) {
					uni.showModal({
						title: '提示',
						content: method + '请求：' + url + '\n入参：' + JSON.stringify(_data) + '\n响应：' + JSON.stringify(resData),
					})
				}
				//判断请求是否成功
				if (res.statusCode == 200) {
					resolve(val)
				} else {
					if (res.statusCode == 404) {
						uni.showModal({
							title: '提示',
							content: '接口请求出错，请检查手机网络',
							success(res) {},
						})
					} else if (res.statusCode == 502) {
						uni.showModal({
							title: '提示',
							content: '服务器维护中，请稍后再来',
							success(res) {},
						})
					} else if (res.statusCode == 503) {
						uni.showModal({
							title: '提示',
							content: '503错误，服务未启动',
							success(res) {},
						})
					} else {
						uni.showModal({
							title: '提示',
							content: '错误：' + res.data.msg,
							success(res) {},
						})
					}
					// uni.showToast({
					// 	title: '系统开小差了，请稍后再试',
					// 	icon: 'none',
					// })
					reject(res.errMsg)
				}
			},
			fail(error) {
				console.log(method + '请求：' + url, '\n入参：', _data, '\n响应：', error.errMsg)

				if (showModal) {
					uni.showModal({
						title: '提示',
						content: method + '请求：' + url + '\n入参：' + JSON.stringify(_data) + '\n响应：' + JSON.stringify(error.errMsg),
					})
				}
				uni.showToast({
					title: '系统开小差了，请稍后再试',
					icon: 'none',
				})
				reject(error.errMsg)
			},
			complete(res) {
				if (showLoading) {
					uni.hideLoading()
				}
			},
		})
	})
}

module.exports = {
	request,
}
