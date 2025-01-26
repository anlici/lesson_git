# useDispatch
    修改store 里面数据，hook函数useDispatch 生成提交对象的dispatch 函数，useSelector 生成获取对象的函数

- 哪个获取store数据
  useSelector
- 哪个修改store数据
  useDispatch
- 得到action对象
  执行store 模块导出的actionCreater方法

- 当你调用一个 action creator 时，它会返回一个 action 对象，这个 action 对象会被 dispatch 到 Redux store，然后 Redux store 会调用相应的 reducer 函数，并将当前的 state 和 action 对象作为参数传递给它。reducer 函数会根据 action 对象的 type 和 payload 属性来更新 state，并返回一个新的 state。

## 前端路由
- 一个path 对应一个组件component 当浏览器访问path，path 对应组件进行页面渲染
ReactRouter

## 路由导航
- 登入页

- 声明式导航
  - <Link to = "/home">
- 编程式导航
  - useNavigate()
  - history.push("/home")
## 传参
- searchParams 传参
- useSearchParams()

- params 传参
- 在rooter 中配置 ：name /:id

## 嵌套路由
- layout component 一级路由组件
- index component 二级路由组件，二级路由出口

children 属性配置路由嵌套
outlet 组件 二级路由出口
## 默认二级路由

只需要二级路由去掉path，设置index 属性为true
 
## 404 用户体验
- 路由配置中最后配置
- 左边notfound 右边*

- react 两种路由模式
- hash
- history

## useReducer 是useState 整合状态的升级版
- useReducer(reducer,0)
  调用dispatch({type: 'add'} ) 触发reducer,更新新的state
  function reducer (state,action) {
  switch (action.type) {
    case 'add':
      return state + 1
    case 'sub':
      return state - 1
    case 'addNum':
      return state + action.payload // 原来state+payload值
    default:
      return state
  }
}
- dispatch 派发动作,传入对象

## useMemo
- 对每次组件重新渲染时，计算的值进行缓存
  useMemo(() => {
    return result
  },[result])
  当result 发生变化时，重新计算result
  当result 不发生变化时，直接使用缓存的result

- react.memo 
  允许comSon组件在props 没有变化时，不重新渲染
  const comSon = memo(function Component(props) {
    return <div>...</div>
  })

- react.memo-props 比较机制
  新旧值进行比较
  props 简单类型，直接比较
  props 复杂，关心引用
- 简单，虽然父组件重新渲染，但是子组件没有变化，不重新渲染
  复杂，一定是新内容，子组件重新渲染
  如何保证子组件不重新渲染？使用useMemo 缓存
  const list = useMemo(() => {
    return [1,2,3]
  },[])

- useCallback 缓存函数
  当依赖项发生变化时，重新生成函数
  当依赖项不发生变化时，使用缓存的函数
  const hello = useCallback(() => {
    return () => {
      console.log('hello')
    }
  },[])

- forwardRef 在父组件中获取子组件的dom
  const sonRef = useRef()
  const showRef = () => {
    console.log(sonRef.current) 
    sonRef.current.focus()
  }
  <ComSon ref={sonRef} />
  ref.current 就是子组件的dom
  子组件使用forwardRef 包裹
  const ComSon = forwardRef((props,ref) => {
    return <div ref={ref}>...</div>
  })

- 聚焦方法暴露给父组件
  useImperativeHandle
  focus: () => {
        inputRef.current.focus()
      }
  useImperativeHandle(ref,() => {
    return {
      focus
    }
  })

- 