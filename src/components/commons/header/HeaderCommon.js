import React, { useEffect, useState, useRef, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Menu, Button, Divider } from "antd";
import { TwitterOutlined } from "@ant-design/icons";
import "./Header.css";

const Login = React.lazy(() => import('../../Authen/Login/Login'));
const CreatePostPage = React.lazy(() => import('../../Post/CreatePost/CreatePost'));
const ProgressBar = React.lazy(() => import('../ProgressBar/ProgressBar'));
const Register = React.lazy(() => import('../../Authen/Register/Register'));
const ForgotPassword = React.lazy(() => import('../../Authen/ForgotPassword/ForgotPassword'));
const Home = React.lazy(() => import('../../Home/Home'));
const Error = React.lazy(() => import('../Error/Error'));

function HeaderCommon(props) {
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [progress, setProgress] = useState(0);
  const [isProgressing, setIsProgressing] = useState(false);
  const logout = () => {
    var cf = window.confirm("Xác nhận đăng xuất");
    if (cf) {
      window.localStorage.removeItem("token");
      setToken(null);
    }
  }
  const timeRef = useRef(0);
  let interval;
  useEffect(() => {
    // console.log("progressing status is:" + isProgressing);
    if (isProgressing) {
      timeRef.current = 0;
      interval = setInterval(() => {
        if (timeRef.current < 100) {
          let tempTime = timeRef.current;
          tempTime += 5;
          timeRef.current = tempTime;
          setProgress(timeRef.current);
        } else {
          clearInterval(interval);
        }
      }, 500);
    }
  }, [isProgressing]);

  return (
    <div className="container-fluid">
      <div className="header">
        <Router>
          <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
            <Divider orientation="left" type="horizontal" style={{ minWidth: 0, display: "flex" }}>
              <Menu.Item key="homeImage" style={{ display: "inline-flex" }}>
                <div className="logo" >
                  <TwitterOutlined />
                </div>
                <Link to="/home"></Link>
              </Menu.Item>
              <Menu.Item key="createPost" style={{ display: "inline-flex" }}>
                <Link to="/create-post">Tạo Post</Link>
              </Menu.Item>
            </Divider >
            <Divider orientation="right">
              {(!token) ?
                <Link to="/login">Đăng nhập</Link>
                :
                <Button onClick={logout}>Đăng xuất</Button>
              }
            </Divider>
          </Menu>
          <Suspense fallback={<div>Loading...</div>}>
            {
              (isProgressing) && <ProgressBar progress={progress} />
            }
            <section>
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/create-post" component={CreatePostPage} />
                <Route path="/login" render={() => (
                  <Login
                    setIsProgressing={setIsProgressing}
                    setToken={setToken}
                  />
                )} />
                <Route path="/register" render={(props) => (
                  <Register
                    setIsProgressing={setIsProgressing}
                  />
                )} />
                <Route path="/forgot" render={(props) => (
                  <ForgotPassword
                    setIsProgressing={setIsProgressing}
                  />
                )} />
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