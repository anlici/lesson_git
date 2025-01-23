import { Button } from "antd-mobile"
import { Outlet } from "react-router-dom"
import { request } from "@/utils"
import { useEffect } from "react"

const Layout = () => {
  useEffect(() => {
    request.get("/user/profile").then((res:any) => {
      console.log(res)
    })
  },[])
  return (
    <div>
      {/* 二级路由 */}
      <Outlet />
      <h1>Hello World</h1>
      <Button color="primary">测试全局</Button>
      <div className="puple">
        我是布局组件
        <Button color="primary">按钮</Button>
      </div>
    </div>
  )
}

export default Layout