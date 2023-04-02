import axios from 'axios'
import { Message } from 'element-ui'
import { getToken } from './utils/cookie'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  timeout: 12000 // 请求超时时间
})

// request拦截器设置
service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['Authorization'] = 'Bearer ' + getToken() // 请求头设置自带 token
    }
    config.headers['Content-Type'] = 'application/json' // 请求的数据格式为 json
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

// response 拦截器设置
service.interceptors.response.use(
  response => {
    const data = response.data
    const code = data.code
    const message = data.msg
    if (code === 0) {
      return data.data
    } else {
      Message({
        type: 'error',
        message
      })
      return Promise.reject('error')
    }
  },
  error => {
    const response = error.response
    const code = response.data.status
    if (response.config.ss == 1) {
      Message({
        type: 'error',
        message: '账户密码错误'
      })
    } else if (response.config.ss == 2) {
      Message({
        type: 'error',
        message: '用户名错误'
      })
    } else if (response.config.ss == 3) {
      Message({
        type: 'error',
        message: '密码错误'
      })
    } else if (!code) {
      Message({
        type: 'error',
        message: '接口请求失败'
      })
    }
    return Promise.reject(error)
  }
)

export default service
