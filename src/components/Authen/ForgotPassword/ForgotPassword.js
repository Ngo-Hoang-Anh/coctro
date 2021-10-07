import React, { useState } from "react";
import { Form, Input, Button, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { sendRequest } from "./../../../common/utility";
import { useHistory } from "react-router-dom";

import "./ForgotPassword.css";
import { ArrowLeftOutlined } from "@ant-design/icons";

function ForgotPassword(props) {
  let history = useHistory();
  const [currentEmail, setCurrentEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [option, setOption] = useState("inputEmail");
  const [message, setMessage] = useState("");
  const sendToEmail = (values) => {
    const path = "/forgot-password";
    const myInit = {
      method: "POST",
      body: JSON.stringify({
        email: values.email,
      }),
    };
    sendRequest(path, myInit).then((result) => {
      if (result.error == null) {
        setCurrentEmail(values.email);
        setOption("inputNewPassword");
      } else {
        setMessage("Error:" + result.error);
      }
    });
  };
  const enterPassword = (values) => {
    setPassword(values.password);
    setOption("inputOTP");
  };
  const confirmOTP = (values) => {
    const path = "/change-password";
    const myInit = {
      method: "POST",
      body: JSON.stringify({
        email: currentEmail,
        newPassword: password,
        otp: values.otp,
      }),
    };
    sendRequest(path, myInit).then((result) => {
      if (result.error == null) {
        setMessage("Password changed successfully");
        history.push("/login");
      } else {
        setMessage("Error:" + result.error);
      }
    });
  };

  const optionRender = () => {
    if (option === "inputEmail") {
      return (
        <div className="container-forgot-password">
          <Form name="normal_login" onFinish={(values) => sendToEmail(values)}>
            <Form.Item>
              <span className="header-text">Đặt lại mật khẩu</span>
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Hãy nhập email hợp lệ!",
                },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Email" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Tiếp theo
              </Button>
            </Form.Item>
          </Form>
        </div>
      );
    }
    if (option === "inputNewPassword") {
      return (
        <div className="container-forgot-password">
          <Form
            name="confirmOTP"
            className="login-form"
            onFinish={(values) => enterPassword(values)}
          >
            <Button
              type="link"
              onClick={() => {
                setOption("inputEmail");
              }}
            >
              <ArrowLeftOutlined
                style={{ fontSize: "30px", position: "absolute" }}
              />
            </Button>
            <Form.Item className="new-password-title">
              <span className="header-text">Nhập mật khẩu mới</span>
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  pattern: /[0-9A-Za-z]{6,30}$/,
                  message:
                    "Hãy nhập mật khẩu dài 6-30 ký tự và không chứa kí tự đặc biệt!",
                },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="Mật khẩu" />
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
              <Input.Password placeholder="Xác nhận mật khẩu" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Xác nhận
              </Button>
            </Form.Item>
          </Form>
        </div>
      );
    }
    if (option === "inputOTP") {
      return (
        <div className="container-forgot-password">
          <Form
            name="confirmOTP"
            className="login-form"
            onFinish={(values) => confirmOTP(values)}
          >
            <Button
              type="link"
              onClick={() => {
                setOption("inputNewPassword");
              }}
            >
              <ArrowLeftOutlined
                style={{ fontSize: "30px", position: "absolute" }}
              />
            </Button>
            <Form.Item>
              <span className="header-text">Nhập mã OTP</span>
            </Form.Item>
            <Form.Item
              name="otp"
              rules={[
                {
                  required: true,
                  pattern: /[0-9]+$/,
                  message: "Mã OTP chỉ bao gồm số",
                },
              ]}
            >
              <Input placeholder="OTP" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Xác nhận OTP
              </Button>
            </Form.Item>
          </Form>
        </div>
      );
    }
  };

  return (
    <>
      <div className="container">{optionRender()}</div>
      <Modal
        visible={message !== ""}
        title={message}
        footer={[
          <Button type="default" onClick={() => setMessage("")}>
            Close
          </Button>,
        ]}
      >
        <h1>{message}</h1>
      </Modal>
    </>
  );
}

export default ForgotPassword;
