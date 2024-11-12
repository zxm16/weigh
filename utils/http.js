import URL from '@/utils/config.js'
import axios from 'axios'
//适配微信小程序
import uniappAdapter from 'axios-adapter-uniapp'

const service = axios.create({
	baseURL:URL,
	timeout:6000,
	adapter:uniappAdapter
})


export default service
