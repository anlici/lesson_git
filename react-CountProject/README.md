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
- 二级路由
  onClick={onMenuClick} 点击,根据key 进行跳转
  const onMenuClick = (route) => {
    console.log('菜单被点击了', route)
    const path = route.key
    navigate(path)
  }
- 反向高亮
  const location = useLocation() // 获取当前路径
  console.log(location.pathname)
  const selectedkey = location.pathname
  再绑定到菜单上menu
  selectedKeys={[selectedkey]}
- 使用antd 菜单组件

## 渲染用户信息
- 安装：npm i react-redux @reduxjs/toolkit
- redux 里面的reducers 对象，包含的方法，用于createSlice 创建动作对象，被store 调用，触发状态更新
- 完成渲染，const name = useSelector(state => state.user.userInfo.name)

## 退出登录
- 提示是否真退出
  <Popconfirm
    title="是否确认退出？"
    okText="退出"
    cancelText="取消"
    onConfirm={onConfirm}>
    <LogoutOutlined /> 退出
  </Popconfirm>
- 绑定onConfirm 事件，回到登录页
  const onConfirm = async () => {
    await dispatch(fetchLogout())
    navigate('/login')
  }
- 清除token
- @ react别名
- cra 在webpack 中配置代理，采用插件 -craco 进行配置
- npm i -D @craco/craco
- 