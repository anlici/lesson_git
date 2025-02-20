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

- graphql ，精确处理，只有一个统一的端点，
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

- 确认退出，设置for绑定
## 图表
- echart 图表
- 安装：npm i echarts
- 引入：import * as echarts from 'echarts'
- 渲染：
  const option = {
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
  }
  const myChart = echarts.init(document.getElementById('main'))
- 封装，不同的使用props 进行适配
  1. 获取渲染图表的dom节点
  const chartDom = chartRef.current

- 所有业务接口进行封装到api
  axios 封装
- 13800000002
- 246810

## 富文本编辑器
- {/* value属性用户选中之后会自动收集起来作为接口的提交字段 */}
  {channelList.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)}
- 收集表单
  使用form 组件收集，封装到hooks 中，按照接口处理表单数据
- {/* 
    listType: 决定选择文件框的外观样式
    showUploadList: 控制显示上传列表
  */}
- upload 上传：action配置接口地址；
  name 接口字段名
  // 状态枚举
  const status = {
    1: <Tag color='warning'>待审核</Tag>,
    2: <Tag color='success'>审核通过</Tag>,
  }
  {
      title: '状态',
      dataIndex: 'status',
      // data - 后端返回的状态status 根据它做条件渲染
      // data === 1 => 待审核
      // data === 2 => 审核通过
      render: data => status[data]
    },
    render 渲染,按照status

- onFinish 
- formValue.date[0].format('YYYY-MM-DD'),
4. 重新拉取文章列表 + 渲染table逻辑重复的 - 复用
    // reqData依赖项发生变化 重复执行副作用函数 

## 路由懒加载
- 路由懒加载
  const Home = lazy(() => import('@/pages/Home'))
  element: <Suspense fallback={'加载中'}><Home /></Suspense>
- "analyze": "source-map-explorer 'build/static/js/*.js'" 
  进行打包分析
- cdn优化
  就近原则，体积大非业务js文件 放在cdn 上

### 大文件上传 进行切片
- seo 优化 
- 切片大小：100 kb
- 使用File.slice 方法，确定start和end，循环获取每个切片
- 切片上传创建formData对象,并将切片和其他必要的信息（如文件名、切片索引、文件唯一标识等）添加到FormData中。
- 并发，控制切片数量，过多请求，采用promise.race 或异步

- 切片上传 + 秒传：文件在传输之间计算内容的散列值，hash
- 白屏时间，控制

### 在进行富文本表单收集
- 使用form 组件收集，封装到hooks 中，按照接口处理表单数据

```js
  'abdc111'.replace(/[abc]/g,''); // 去a b c
  'adsda11'.replace(/\d+/g,match => `[${match}]`) 数字形成 []
  // 数字 *2
  'adsda11'.replace(/\d+/g,match => `[${match * 2}]`)
  'adsda11'.replace(/\d+/g,match => String(parseInt(match)*2))
```
- promise.race 一组，一个变换状态，返回结果
- all 所有
- allSettled() 所有完成，包含状态和值，数组
- any 一个成功，返回promise值，全部失败，返回AggregateError

- forEach((item,i) => {

})
- https
  超文本传输协议在安全加密字层
  工作在传输层，而hhtp 在应用层
- 原型链
  每个对象可以使用原型对象的 属性和方法
  __proto__ 获取；构造函数的prototype
  实现扩展，继承
    在调用方法或属性时，先在自身找，如果没有就依次向上到原型上、原型的原型上找，有则输出，没有报错，最上层为Object的原型
    补充：原型链的顶端为 null

- react mvc 模型 视图 控制器
  ts js的静态类型检查

- LangChain 包含六部分组成，分别为：Models、Prompts、Indexes、Memory、Chains、Agents。
  有很多的语言模型，有些对token 数量有限制，langchain通过统一接口
  和工具，让开发者轻松比较不同的模型进行切换；
  langchain 能够快速构建和部署应用，并轻松扩展和定制。

- 打包 dirt 
  创建dockerfile文件，设置镜像，打包镜像，启动容器
  docker build -t my-app:latest .
  docker run -p 3000:3000 my-app:latest 运行容器

- 继承，不用es6
  原型继承 __proto__ 
  a.protype = new B()
  设置 contructor 指向子类
  a.prototype.constructor = a;
  继承了方法，没有继承属性
  - 使用借用继承
    函数名.call 继承，继承属性

  - es6 创建父类实例对象，调用父类super 方法，子类使用构造函数修改

- 观察者模式，发布订阅模式：
  事件驱动，在一个对象发生变化，其他对象需要响应这些变化
  当一个对象（主题，subject）状态发生变化，所依赖的对象（观察者，observe）
  自动通知进行更新。
  主题
  观察者
- 订阅:允许组件将消息发布到消息系统，其他订阅者进行订阅消息 接收通知。
  发布者 订阅者

### es6 
- 块级作用域
- 箭头 模版字符串 解构赋值 symbol 唯一标识 模块化

### 内存优化
- 虚拟列表：优化长列表渲染，处理大数据，只渲染可视化区域
  - 分页加载：
  - 动态渲染：
  - 内存优化：复用dom元素，减少内存消耗

- 尾递归
  - 迭代形式，减少栈空间消耗
  - 复用当前
  - 

- ast 抽象语法树
  将babel 解析成ast
  修改语法，重新生成ast，重新生成js代码

- cors 跨域资源 ，后端设置响应头，白名单，特定源访问
- jsonp 在script 标签src属性 不受同源 限制 实现跨域
  只支持get
- 代理服务器 后端中间件，进行请求转发
- 

- 定位：position
  flexbox 布局
- grid 列表，js控制 粘性定位
- flex 

### 价值对
- 建： 值：语言
- webwork.js:开启新的线程，执行js代码，
  进度显示，
  选择好了语言，下次直接勾选语音和模版语音，
  本地浏览器缓存，

 