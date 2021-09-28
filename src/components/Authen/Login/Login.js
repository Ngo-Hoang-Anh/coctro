import React from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";

import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { URLpath, sendRequest } from '../../../common/utility';
const Login = (props) => {
  let history = useHistory();
  function onFinish(values) {
    const testURL = URLpath + '/login';
    const myInit = {
      method: 'POST',
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    }

    props.setIsProgressing(true);
    sendRequest(testURL, myInit).then((result) => {
      console.log("error:" + result.error);
      if (result.error == null) {
        window.localStorage.setItem("token", result.token);
        props.setToken(result.token);
        history.push("/home");
      } else {
        window.alert(result.error);
      }
      setTimeout(() => props.setIsProgressing(false), 2000);
    });
    //set time out for testing purpose
  }

  return (
    <div className="container-form-login">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Hãy nhập email hợp lệ!',
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
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Mật khẩu"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Đăng nhập
          </Button>
        </Form.Item>
        <Form.Item>
          <a className="login-form-forgot" href="/forgot">
            Quên mật khẩu?
          </a>
          <br />
          <br />
          <p>Chưa có tài khoản?</p><a href="/register"> Đăng kí ngay</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;