import { Button } from "antd-mobile"
import { Outlet } from "react-router-dom"

const Layout = () => {
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