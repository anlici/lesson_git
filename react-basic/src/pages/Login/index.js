import {Link ,useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>登录页</h1>
      {/* 声明式导航 */}
      <Link to='/article'>文章页</Link>
      <button>登录</button>
      {/* 编程式导航 */}
      <button onClick={()=>{
        navigate('/article')
      }}>文章页</button>
      <button onClick={()=>{
        navigate('/article?id=1&name=zs')
      }}>searchParams传参</button>
      <button onClick={()=>{
        navigate('/article/1001/jack')
      }}>searchParams传参</button>
    </div>
  )
}
export default Login