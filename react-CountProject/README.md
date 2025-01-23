### request 请求模块
- axios：
  一样接口，但是可以配置请求头，请求拦截器，响应拦截器
  使用request 进行请求，再统一进行导出
- redux 管理token
  多模块进行共享，redex 方便状态共享
  安装：
  npm i react-redux @reduxjs/toolkit


## login 并且跳转
- const onFinish = async (values: any) => {
      await dispatch(fetchLogin(values))
      // 跳转页面
      navigate('/')
      // 提示
      message.success('登录成功')
    }
- token持久化
  redux 基于浏览器存储，现在使用了localStorage 进行存储
    initialState:{
        token:localStorage.getItem('token_key') || '' // 后端string类型
    },
    reducers:{
        setToken:(state,action)=>{
            state.token = action.payload // paload 载荷赋值给token
            localStorage.setItem('token_key',action.payload)
        },
    }
- token 封装存取删方法
  多模块，共享复用
- axios 请求拦截器注入token
  多个接口以token 为依据，进行请求；
  在axios 请求体注入token，自动携带
- 使用token 进行路由权限控制
  
## 初始化样式
- npm i normalize.css
- html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  #root {
    height: 100%;
  }

## 高亮和跳转
