
/**
 * context 机制，实现跨层组件通信
 * 1.createContext 创建 context 对象，上下文ctx 对象
 * 2.Provider 提供器，包裹需要跨层通信的组件
 * 3.Consumer 消费者，包裹需要接收数据的组件
 */
import React,{useState,createContext, useContext} from'react';

// 1.创建 context 对象
const msgContext = createContext()

function ContextApp() {
   const msg = 'this is app '
    return (
        <>
          <msgContext.Provider value={msg}>
            <div>
              <h2>我是app组件</h2>
              <A />
            </div>
          </msgContext.Provider>
        </>
    )
}
function A() {
    const sonMsg = '我是son1子组件'
    return (
        <>
          {sonMsg}
          <B />
        </>
    )
}
function B() {
    // 3.使用 useContext 钩子接收数据
    const msg = useContext(msgContext)
    return (
        <>
          this is B，{msg}
        </>
    )
}
export default ContextApp;
