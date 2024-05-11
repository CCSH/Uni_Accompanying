import net from '@/utils/request.js'
import config from '@/config/env'

module.exports = {
	login: data => {
		return net.request(config.baseUrl + '/xxx', 'get', data, false)
	},
	
}
