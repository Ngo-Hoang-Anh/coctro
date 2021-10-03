import React from "react";

import { Form, Input, Button, Image } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { sendRequest } from "../../../common/utility";
import { useHistory } from "react-router-dom";

import "./Register.css";

const Register = () => {
  let history = useHistory();
  const onFinish = (values) => {
    //TODO: validate
    const path = "/register";
    const myInit = {
      method: "POST",
      body: JSON.stringify({
        email: values.email,
        password: values.password,
        fullName: values.fullName,
        phone: values.phone,
      }),
    };
    sendRequest(path, myInit).then((result) => {
      if (result.error == null) {
        window.alert("New account created successfully");
        history.push("/login");
      } else {
        window.alert("Error:" + result.error);
      }
    });
  };

  return (
    <div className="container">
      <Image
        id="logo"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      <div className="container-form-register">
        <Form name="normal_login" className="login-form" onFinish={onFinish}>
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
            <div className="email-register">
              <Input placeholder="Email" />
            </div>
          </Form.Item>
          <Form.Item
            name="fullName"
            rules={[
              {
                required: true,
                message: "Hãy nhập họ và tên!",
              },
            ]}
          >
            <div className="fullname">
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Họ và Tên"
              />
            </div>
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: "Hãy nhập số điện thoại!",
              },
            ]}
          >
            <div className="phone">
              <Input placeholder="Số điện thoại" />
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
            hasFeedback
          >
            <div className="password">
              <Input.Password placeholder="Mật khẩu" />
            </div>
          </Form.Item>

          <Form.Item
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Hãy xác nhận mật khẩu!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error("Hai mật khẩu bạn vừa nhập không khớp")
                  );
                },
              }),
            ]}
          >
            <div className="confirm-password">
              <Input.Password placeholder="Xác nhận mật khẩu" />
            </div>
          </Form.Item>
          <Form.Item>
            <div className="button-register">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Đăng kí
              </Button>
            </div>
          </Form.Item>
          <Form.Item>
            <div className="change-to-login">
              <p>
                Đã có tài khoản? <a href="/login"> Đăng nhập ngay</a>
              </p>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Register;
