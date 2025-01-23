// axios 封装
import axios from 'axios'
// 
const request = axios.create({
    baseURL:'http://geek.itheima.net/v1_0',
    timeout:5000
})
// 请求拦截器
// 发送请求前做拦截
request.interceptors.request.use(config => {
    // 拦截业务逻辑
    // 进行请求配置的修改
    console.log(config);
    // 必须返回请求配置
    return config
    
})
// 响应拦截器
// 处理响应数据
request.interceptors.response.use(response => {
    // 返回的响应不再需要从data属性当中拿数据，而是响应就是我们要的数据
    return response.data
}, e => {
    // 处理响应失败
    return Promise.reject(e)
})

export default request