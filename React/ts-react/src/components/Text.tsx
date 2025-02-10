import React from "react"
//扩充event类型
declare global {
    interface Event {
        params: any
    }
   
}
const Test: React.FC= (props) => {
    const event = new Event('click'); // 添加到事件中心
    const clickTap = () => {
        console.log(event);
        event.params = {name: '我是参数'};
        window.dispatchEvent(event); // 派发事件
    }
    return <div>
        <button onClick={clickTap}>派发事件</button>
    </div>
}

export default Test