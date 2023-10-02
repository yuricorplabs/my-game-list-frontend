import React from 'react'
import { submitLogin, renderErrors } from '../client_wrappers/LoginWrapper'
import { useSelector } from 'react-redux'

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Space, Layout, Alert, Button, Form, Input } from 'antd';

export default function Login() {
  const error = useSelector((state) => state.session.error)
  const [form] = Form.useForm()

  const requiredRule = (message) => {
    return {
      required: true,
      message: message,
    }
  }

  const inputStyle = {
    color: 'gray'
  }

  return (
    <Space direction="vertical" align='center' className='flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0'>
      <Layout className='p-10'>
        {error && (
          <Alert message={error} type='error' className='mt-0 mb-10 text-center' />
        )}

        <Form
          form={form}
          name="normal_login"
          className="login-form"
          onFinish={(values) => submitLogin(form, values)}
          onFinishFailed={renderErrors}
          labelCol={{ span: 8 }}
        >
          <Form.Item
            name="email"
            rules={[requiredRule('Please input your email!')]}
          >
            <Input prefix={<UserOutlined style={inputStyle}/>} placeholder='Email' />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[requiredRule('Please input your password!')]}
          >
            <Input.Password prefix={<LockOutlined style={inputStyle} />} placeholder='Password'/>
          </Form.Item>

          <Form.Item className='flex flex-row-reverse mb-0'>
            <Button type="primary" htmlType="submit" >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Layout>
    </Space>
  )
}