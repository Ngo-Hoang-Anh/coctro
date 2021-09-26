import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Menu } from "antd";
import { TwitterOutlined } from "@ant-design/icons";

import Error from "../Error/Error";
import Home from "../../Home/Home";
import "./Header.css";

import Login from "../../Login/Login";
import Register from "../../Register/Register";
import ForgotPassword from "../../ForgotPassword/ForgotPassword";

function HeaderCommon(props) {
  return (
    <div className="container-fluid">
      <div className="header">
        <Router>
          <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
            <Menu.Item key="homeImage">
              <div className="logo">
                <TwitterOutlined />
              </div>
              <Link to="/home"></Link>
            </Menu.Item>
            <Menu.Item key="login">
              <Link to="/login">Đăng nhập</Link>
            </Menu.Item>
          </Menu>

          <Switch>
            {/* <Route exact path="/" component={home} /> */}
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgot" component={ForgotPassword} />
            <Route path="/:somestring" component={Error} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default HeaderCommon;