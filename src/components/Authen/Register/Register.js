import React, { useState } from "react";

import { Form, Input, Button, Image, Tooltip } from "antd";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
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

  const [message, setMessage] = useState("Hãy nhập mật khẩu!");

  const checkPassword = (value) => {
    if (!value) {
      setMessage("Hãy nhập mật khẩu!");
    } else {
      if (value.length < 6) {
        setMessage("Mật khẩu phải chứa ít nhất 6 ký tự");
      } else {
        if (value.length > 30) {
          setMessage("Mật khẩu phải không dài hơn 30 ký tự");
        } else {
          if (!/^(?=.*[A-Z])/.test(value)) {
            setMessage("Hãy nhập ít nhất một chữ cái in hoa");
          } else {
            if (!/^(?=.*[a-z])/.test(value)) {
              setMessage("Hãy nhập ít nhất một chữ cái in thường");
            } else {
              if (!/^(?=.*[1-9])/.test(value)) {
                setMessage("Hãy nhập ít nhất một chữ số");
              } else {
                if (!/[!@#$&*]/.test(value)) {
                  setMessage("Hãy nhập ít nhất một ký tự đặc biệt");
                }
              }
            }
          }
        }
      }
    }

    //"Hãy nhập ít nhất một chữ cái in hoa"
    // if(value)
  };

  const [fullName, setFullName] = useState("Hãy nhập họ và tên");
  const checkFullName = (value) => {
    if (!value || value === "") {
      setFullName("Hãy nhập họ và tên");
    } else {
      if(/^[1-9]+$/.test(value)) {
        setFullName("Họ và tên không được chứa số");
      }
    }
  };
  return (
    <div className="container-register">
      <Image
        id="logo"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      <div className="container-form-register">
        <div className="register-rule">
          <span>
            Ghi chú:
            <br />
            - Email phải chứa cả đuôi (ví dụ: @gmail.com, @fpt.edu.vn,...){" "}
            <br />
            - Họ và tên không được chứa số
            <br />
            - Mật khẩu có độ dài từ 6 đến 30 ký tự
            <br />
            - Mật khẩu phải chứa ít nhất 1 ký tự in hoa (ví dụ: A, B, C,...){" "}
            <br />
            - Mật khẩu phải chứa ít nhất 1 ký tự in thường (ví dụ: a, b, c,...){" "}
            <br />
            - Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt (ví dụ: @, !,...)
          </span>
        </div>
        <Form name="normal_login" className="register-form" onFinish={onFinish}>
          <Form.Item>
            <div className="login-label">
              <span>Đăng ký</span>
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
            <div className="email-register">
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </div>
          </Form.Item>
          <Form.Item
            name="fullName"
            rules={[
              {
                required: true,
                pattern: new RegExp(/^[A-Za-z\u00C0-\u024F\u1E00-\u1EFF ]+$/),
                message: "Hãy nhập đúng tên của bạn",
              },//{ fullName }
            ]}
            hasFeedback
          >
            <div className="fullname">
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Họ và Tên"
                onChange={(event) => checkFullName(event.target.value)}
                
              />
            </div>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                pattern: new RegExp(
                  // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,30}$/
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&\u00C0-\u024F\u1E00-\u1EFF ]{6,30}$/
                ),
                message: { message },
              },
            ]}
            hasFeedback
          >
            <div className="password">
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Mật khẩu"
                onChange={(event) => checkPassword(event.target.value)}
              />
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

                  return Promise.reject(new Error("Hai mật khẩu không khớp"));
                },
              }),
            ]}
          >
            <div className="confirm-password">
              <Input.Password
                prefix={<UnlockOutlined className="site-form-item-icon" />}
                placeholder="Xác nhận mật khẩu"
              />
            </div>
          </Form.Item>
          <Form.Item>
            <div className="button-register">
              <Button
                type="primary"
                htmlType="submit"
                // onSubmit={checkPassword}
                className="login-form-button"
              >
                Đăng ký
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
