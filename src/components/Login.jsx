import React from 'react'
import { submitLogin, renderErrors } from '../client_wrappers/LoginWrapper'
import { useSelector } from 'react-redux'

import { Alert, Button, Form, Input } from 'antd';

export default function Login() {
  const error = useSelector((state) => state.session.error)
  const [form] = Form.useForm()

  const requiredRule = (message) => {
    return {
      required: true,
      message: message,
    }
  }

  return (
    <>
      {error && (
        <Alert message={error} />
      )}

      <Form
        form={form}
        name="normal_login"
        className="login-form"
        onFinish={(values) => submitLogin(form, values)}
        onFinishFailed={renderErrors}
      >
        <Form.Item
          label="email"
          name="email"
          rules={[requiredRule('Please input your email!')]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[requiredRule('Please input your password!')]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}