import { useEffect,useState } from "react";

// useEffect 钩子函数,react hook函数，本身不是事件引起，而是渲染本身引起
// 一般有：发送请求，获取数据，设置订阅，手动更改 React 组件中的 DOM
const URL = 'http://geek.itheima.net/v1_0/channels'
// function App() {
//     const [list,setList] = useState([])
//     useEffect(() => {
//        // 额外操作 ，后面为空数组，只执行一次
//       async function getData() {
//         const res = await fetch(URL)
//         const jsonRes = await res.json()
//         console.log(jsonRes);
//         // 
//          setList(jsonRes.data.channels)
//       }
//       // 调用   
//       getData()
//     },[])
//     return (
//         <>
//            <div>
//               <h2>App组件</h2>
//               <ul>
//                 {
//                   list.map(item => {
//                      return <li key="item.id" >{item.name}</li>
//                   })
//                 }
//               </ul>
//            </div>
//         </>
//     )
// }

// function App() {
//   const [count, setCount] = useState(0)
//   // 1.没有依赖 初始+组件更新
//   // useEffect(() => {
//   //   console.log('副作用函数执行')
//   // })

//   // 2.有特定依赖 初始+ 依赖更新
//   useEffect(() => {
//     console.log('count更新了')
//   }, [count])

//   // 3.空数组依赖， 初始执行一次
//   // useEffect(() => {
//   //   console.log('count更新了')
//   // }, [])

//   return (
//     <>
//       <button onClick={() => setCount(count+1)}> +{count} </button>
//     </>
//   )
// }
function useShow() {
  const [show,setShow] = useState(true)
  const [count,setCount] = useState(0)
  return{
    show,
    setShow,
    count,
    setCount
  }
}
// 清除副作用，比如，有定时器容易发生内存泄漏，需要卸载
function Son() {
  const {count,setCount} = useShow()
  // 组件卸载 ，return 清除副作用
  useEffect(() => {
     const timer = setInterval(() => {
       console.log('定时器执行了' + count)
       setCount(() => count+1)
     }, 1000)
     // 清除副作用,清理函数
     return () => { 
       clearInterval(timer)
     }
  },[])
   return (
     <div>
       <h2>Son组件</h2>
     </div>
   )
}

function App() {
    const {show,setShow} = useShow()
    useEffect(() => {
      console.log('定时器执行了')
    },[show])

    return (
      <>
        {show && <Son />} 
        <button onClick={() => setShow(!show)}>显示/隐藏</button>
      </>
    )
}

/**
 * 自定义hook
 * 复用逻辑
 * 1.use大头函数
 * 2.组件用到状态 ，方法 就return 
 * 3.解构{} 
 * 使用规则：
 * 1.只能在组件中，或者自定义hook中使用
 * 2，不能在循环for，条件判断if中使用，只在顶层调用
 */


export default App;