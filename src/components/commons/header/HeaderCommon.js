import React, { useState, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Menu, Button, Divider, Modal } from "antd";
import { TwitterOutlined } from "@ant-design/icons";
import "./Header.css";

const Login = React.lazy(() => import("../../Authen/Login/Login"));
const Register = React.lazy(() => import("../../Authen/Register/Register"));
const ForgotPassword = React.lazy(() =>
  import("../../Authen/ForgotPassword/ForgotPassword")
);
const Home = React.lazy(() => import("../../Home/Home"));
const Error = React.lazy(() => import("../Error/Error"));
const CreatePost = React.lazy(() =>
  import("./../../Post/CreatePost/CreatePost/CreatePost")
);
const AuthenRequired = React.lazy(() =>
  import("../../Authen/AuthenRequired/AuthenRequired")
);

function HeaderCommon(props) {
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [isModalVisible, setIsModalVisible] = useState(false);

  const logout = () => {
    setIsModalVisible(true);
  };

  const checkLogout = (choose) => {
    if (choose) {
      window.localStorage.removeItem("token");
      setToken(null);
    }
    setIsModalVisible(false);
  };
  return (
    <div className="container-fluid">
      <div className="header">
        <Router>
          <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
            <Divider
              orientation="left"
              type="horizontal"
              style={{ minWidth: 0, display: "flex" }}
            >
              <Menu.Item key="homeImage" style={{ display: "inline-flex" }}>
                <div className="logo">
                  <TwitterOutlined />
                </div>
                <Link to="/home"></Link>
              </Menu.Item>
              <Menu.Item key="createNewPost" style={{ display: "inline-flex" }}>
                <Link to="/create-new-post">Tạo bài đăng</Link>
              </Menu.Item>
            </Divider>
            <Divider orientation="right">
              {!token ? (
                <Link to="/login">Đăng nhập</Link>
              ) : (
                <Button onClick={logout}>Đăng xuất</Button>
              )}
            </Divider>
          </Menu>
          <Modal
            visible={isModalVisible}
            onOk={() => checkLogout(true)}
            onCancel={() => checkLogout(false)}
          >
            <h1>Bạn có chắc chắn muốn đăng xuất không?</h1>
          </Modal>
          <Suspense fallback={<div>Loading...</div>}>
            <section>
              <Switch>
                <Route path="/home" component={Home} />
                <Route
                  path="/login"
                  render={(props) => <Login setToken={setToken} />}
                />
                <Route path="/register" render={(props) => <Register />} />
                <Route path="/forgot" render={(props) => <ForgotPassword />} />
                <Route
                  path="/create-new-post"
                  render={(props) => (
                    <AuthenRequired
                      setToken={setToken}
                      requestedComponent={CreatePost}
                    />
                  )}
                />
                <Route path="/:somestring" component={Error} />
              </Switch>
            </section>
          </Suspense>
        </Router>
      </div>
    </div>
  );
}

export default HeaderCommon;
