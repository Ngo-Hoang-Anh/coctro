import React from "react";

import { Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { URLpath, sendRequest } from '../../common/utility';

const Register = () => {
  const onFinish = (values) => {
    //TODO: validate
    const testURL = URLpath + '/register';
    const myInit = {
      method: 'POST',
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    }
    sendRequest(testURL, myInit)
      .then(result => {
        console.log("result:");
        console.log(result);
      }
      );;
  };

  return (
    <div className="container-form-login">
      <Form
        name="normal_login"
        className="login-form"
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Hãy nhập email!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Hãy nhập mật khẩu!',
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Mật khẩu" />
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Hãy xác nhận mật khẩu!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error('Hai mật khẩu bạn vừa nhập không khớp'));
              },
            }),
          ]}
        >
          <Input.Password placeholder="Xác nhận mật khẩu" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Đăng kí
          </Button>
        </Form.Item>
        <Form.Item>
          <p>Đã có tài khoản?</p><a href="/login"> Đăng nhập ngay</a>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Register;
