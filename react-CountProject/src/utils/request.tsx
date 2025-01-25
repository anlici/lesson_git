// axios 封装
import axios from 'axios'
import { getToken } from '@/utils'
import { removeToken } from '@/utils/token'
const request = axios.create({
    baseURL:'http://geek.itheima.net/v1_0',
    timeout:5000
})
// 请求拦截器
// 发送请求前做拦截
request.interceptors.request.use((config) => {
    // 操作config，注入token
    const token = getToken()
    // 按照后端的要求，token需要注入到headers中
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
    }, e => {
        // 处理请求失败
    return Promise.reject(e)
})

// 响应拦截器
// 处理响应数据
request.interceptors.response.use(response => {
    // 返回的响应不再需要从data属性当中拿数据，而是响应就是我们要的数据
    return response.data
}, e => {
   // 401 token失效
   if (e.response.status === 401) {
    removeToken() // 清除token
    // 跳转到登录页面
    location.href = '/login'
    // window.location.reload() // 刷新页面
   }
    return Promise.reject(e)
})

export default request