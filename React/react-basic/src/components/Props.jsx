// onChange = (e) => {state.set(e.target.value)}

// 获取dom
// useRef 生成ref 对象，绑定dom标签；
/** dom可用，ref.current 获取
 * 
 *  uuid 生成唯一id ,npm install uuid
 *  import {v4 as uuidv4} from 'uuid'; // uuids4 重新命名
 *  
 *  ctime 时间戳 Day.js npm install dayjs
 *  import dayjs from 'dayjs';
 * // 当前时间格式化
 * dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')
 * 
 * 清空input
 * setContent('')
 * 聚焦
 * const ref = useRef(null)
 * ref.current.focus()
 *  在input 标签上添加 ref={ref}
 *
 * */

/**  组件通信
 * 父传子
 * 1.父传递数据 子组件标签上添加属性
 * 2.子组件接收数据 props 对象接收，包含父组件传递过来的所有属性
 */
/** 子传父
 * 1.父组件定义函数，子组件调用函数
 * 2.子组件传递函数给父组件
 * 3.父组件调用函数
 */
/**
 * 兄弟组件通信
 * son1 传给父，父传给son2
 * 状态提升
 */
import React,{useState} from 'react';
function Props() {
    // props 只读，子组件不能去修改；
    // 内容嵌套子组件标签，自动在子组件创建 children 属性 
    const [msg,setMsg] = useState('')
    const getMsg = (msg) => {
        console.log(msg);
        setMsg(msg) // 子组件修改父组件状态
    }
    return (
        <>
         <div>
            <h2>父组件：{msg}</h2>
         </div>
         <div>
            <Son1 name="李四" age={20} getMsg={getMsg}></Son1>
            <Son2 msg={msg}></Son2>
         </div>
        </>
    )
}
function Son1(props) {
    const sonMsg = '我是son1子组件'
    return (
        // <div>
        //     <h2>姓名：{props.name}</h2>
        //     <h2>年龄：{props.age}</h2>
        //     <h2>内容：{props.children}</h2>
        // </div>
        <>
          <button onClick={() => props.getMsg(sonMsg)}>按钮</button>
        </>
    )
}
function Son2(props) {
    return (
        <>
          <h2>我是son2子组件</h2>
          <h2>内容：{props.msg}</h2>
        </>
    )
}
export default Props;
export {Son1,Son2}