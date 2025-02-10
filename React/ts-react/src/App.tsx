import React from "react"
import Test from "./components/Text"
import Test2 from "./components/Test2"
interface Props {
    children: React.ReactNode //手动声明children
}

const App: React.FC<Props> = (props) => {
    // const fn = (params:string) => {
    //     console.log('子组件触发',params);
    // }
    return <>
    
    <Test></Test>
    <Test2 ></Test2>

    </>
}

export default App