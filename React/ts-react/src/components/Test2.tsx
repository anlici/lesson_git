import { useEffect } from "react";
export default function Test2() {
    useEffect(() => {
        const handleClick = (e:Event) => {
            console.log('事件触发了', e.params);
        }
        window.addEventListener('click', handleClick);
        return ()=>{
            window.removeEventListener('click', handleClick);
        }
    },[])
    
    return  <div>test2</div>
}