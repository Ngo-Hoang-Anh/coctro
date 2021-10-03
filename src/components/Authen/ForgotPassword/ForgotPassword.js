import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { sendRequest } from "./../../../common/utility";
import { useHistory } from "react-router-dom";

import "./ForgotPassword.css";
import { ArrowLeftOutlined } from "@ant-design/icons";

function ForgotPassword(props) {
  let history = useHistory();
  const [currentEmail, setCurrentEmail] = useState(null);
  const sendToEmail = (values) => {
    //TODO: validate
    const path = "/forgot-password";
    const myInit = {
      method: "POST",
      body: JSON.stringify({
        email: values.email,
      }),
    };
    setCurrentEmail(values.email);
    sendRequest(path, myInit).then((result) => {
      if (result.error == null) {
        setCurrentEmail(values.email);
      } else {
        window.alert("Error:" + result.error);
      }
    });
  };
  const confirmOTP = (values) => {
    const path = "/change-password";
    const myInit = {
      method: "POST",
      body: JSON.stringify({
        email: currentEmail,
        newPassword: values.password,
        otp: values.otp,
      }),
    };
    sendRequest(path, myInit).then((result) => {
      if (result.error == null) {
        window.alert("Password changed successfully");
        history.push("/login");
      } else {
        window.alert("Error:" + result.error);
      }
    });
  };

  const optionRender = (option) => {
    if (option === "inputEmail") {
      return (
        <div className="container-forgot-password">
          <Form
            name="normal_login"
            className="forgot-password-form"
            onFinish={sendToEmail}
          >
            <Form.Item>
              <div className="new-password-title">
                <ArrowLeftOutlined id="back-icon" />{" "}
                <span id="new-password-title-content">Đặt Lại Mật Khẩu</span>
              </div>
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
              <div className="email">
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </div>
            </Form.Item>
            <Form.Item>
              <div className="forgot-button">
                <Button type="primary" htmlType="submit">
                  Tiếp theo
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      );
    }

    if (option === "inputOTP") {
      <div>
        <span>
          Mã OTP đã đƯợc gửi về email <b>{currentEmail}</b>. Hãy nhập mã OTP và
          mật khẩu mới.
        </span>
        <Form name="confirmOTP" className="login-form" onFinish={confirmOTP}>
          <Form.Item
            name="otp"
            rules={[
              {
                required: true,
                message: "Hãy nhập OTP!",
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
      </div>;
    }

    if(option === "inputNewPassword") {
    <div>
        Thiết lập mật khẩu
        <p>
            Tạo mật khẩu mới cho <b>{currentEmail}</b>
          </p>
          <Form name="confirmOTP" className="login-form" onFinish={confirmOTP}>
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
            <Button
              type="link"
              className="login-form-button"
              onClick={() => setCurrentEmail(null)}
            >
              Nhập email khác
            </Button>
          </Form>
    </div>
    }
  };

  return (
    <div className="container">
      {currentEmail == null ? ( // if there is no email
        <div className="container-forgot-password">
          <Form
            name="normal_login"
            className="forgot-password-form"
            onFinish={sendToEmail}
          >
            <Form.Item>
              <div className="new-password-title">
                <ArrowLeftOutlined id="back-icon" />{" "}
                <span id="new-password-title-content">Đặt Lại Mật Khẩu</span>
              </div>
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
              <div className="email">
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </div>
            </Form.Item>
            <Form.Item>
              <div className="forgot-button">
                <Button type="primary" htmlType="submit">
                  Tiếp theo
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      ) : (
        //if there are email, waiting for OTP
        <>
          <p>
            Mã OTP đã đƯợc gửi về email <b>{currentEmail}</b>. Hãy nhập mã OTP
            và mật khẩu mới.
          </p>
          <Form name="confirmOTP" className="login-form" onFinish={confirmOTP}>
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
            <Form.Item
              name="otp"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập OTP!",
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
                Xác nhận
              </Button>
            </Form.Item>
            <Button
              type="link"
              className="login-form-button"
              onClick={() => setCurrentEmail(null)}
            >
              Nhập email khác
            </Button>
          </Form>
        </>
      )}
    </div>
  );
}

export default ForgotPassword;
