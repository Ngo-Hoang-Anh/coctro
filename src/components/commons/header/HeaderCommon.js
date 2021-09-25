import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Menu } from "antd";
import { TwitterOutlined } from "@ant-design/icons";

import Login from "../../Login/Login";
import Register from "../../Register/Register";
import Error from "../Error/Error";
import "./Header.css";

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
            </Menu.Item>
            <Menu.Item key="login">
              <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item key="register">
              <Link to="/register">Register</Link>
            </Menu.Item>
          </Menu>

          <Switch>
            {/* <Route exact path="/" component={home} /> */}
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/:somestring" component={Error} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default HeaderCommon;