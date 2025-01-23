import {
    Button,
    Form,
    Input,
    Card,
    message
  } from 'antd'
import './index.scss'
import { useDispatch } from 'react-redux'
import { fetchLogin  } from '@/store/modules/user'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onFinish = async (values: any) => {
      await dispatch(fetchLogin(values))
      // 跳转页面
      navigate('/')
      // 提示
      message.success('登录成功')
    }
    return (
      <div className='login-container'>
        <Card title="登录">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ // 记住我，默认勾选字段
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
             validateTrigger="onBlur"
              name="username"
              rules={[
                {
                  required: true,
                  message: '请输入用户名',
                },
                {
                    pattern: /^[a-zA-Z0-9_-]{4,16}$/,
                    message: '请输入正确的用户名'
                }
              ]}
            >
              <Input placeholder="用户名" />
            </Form.Item>
            <Form.Item
            validateTrigger="onBlur"
              name="password"
              rules={[
                {
                  required: true,
                  message: '请输入密码',
                },
                {
                    pattern: /^[a-zA-Z0-9_-]{4,16}$/,
                    message: '请输入正确的密码'
                }
              ]}
            >
              <Input.Password placeholder="密码" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" 
              className="login-form-button" size='large'>
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
  export default Login