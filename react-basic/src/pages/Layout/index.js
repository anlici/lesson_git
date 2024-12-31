import { Outlet,Link } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <h1>首页</h1>
      {/* 二级路由出口 */}
      {/* <Link to="/board">面包</Link> */}
      <Link to="/">面包</Link>
      <Link to="/about">关于</Link>
      <Outlet />
    </div>
  )
}
export default Layout