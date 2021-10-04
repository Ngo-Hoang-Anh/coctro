import React from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";

import { Form, Input, Button, Image } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { sendRequest } from "../../../common/utility";

const Login = (props) => {
  let history = useHistory();
  function onFinish(values) {
    const path = "/login";
    const myInit = {
      method: "POST",
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    };

    sendRequest(path, myInit).then((result) => {
      if (result.error == null) {
        window.localStorage.setItem("token", result.token);
        props.setToken(result.token);
        history.push("/home");
      } else {
        window.alert(result.error);
      }
    });
    //set time out for testing purpose
  }

  return (
    <div className="container">
      <Image
        id="logo"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      <div className="container-form-login">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item>
            <div className="login-label">
              <span>Đăng nhập</span>
            </div>
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Hãy nhập email hợp lệ!",
              },
            ]}
          >
            <div className="email-login">
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </div>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Hãy nhập mật khẩu!",
              },
            ]}
          >
            <div className="password">
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Mật khẩu"
              />
            </div>
          </Form.Item>

          <Form.Item>
            <div className="button-login">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                <span id="button-login">Đăng nhập</span>
              </Button>
            </div>
          </Form.Item>
          <Form.Item>
            <div>
              <a className="login-form-forgot" href="/forgot">
                Quên mật khẩu?
              </a>
            </div>
          </Form.Item>
          <Form.Item>
            <div className="link-to-register">
              <p>
                Chưa có tài khoản?<a href="/register"> Đăng kí ngay</a>
              </p>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
