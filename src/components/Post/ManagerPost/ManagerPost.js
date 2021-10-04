import React from "react";
import "./ManagerPost.css";
import "../PostHome/PostHome";
import "./ManagerPost.css";

import { Layout, Menu, Breadcrumb } from "antd";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const { Sider } = Layout;

const options = ["Tất cả", "Phòng cho thuê", "Tìm ở ghép"];
const postStatus = [
  { title: "Bài đăng đang chờ duyệt", link: "post-pending" },
  { title: "Bài đăng đã được duyệt", link: "post-success" },
  { title: "Bài đăng bị từ chối", link: "post-denied" },
  { title: "Bài đăng đã hết hạn", link: "post-overtime" },
];

function ManagerPost(props) {
  return (
    <div className="manager-post-container">
      <div className="manager-post-container-detail">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
          <Breadcrumb.Item>Quản lý bài đăng</Breadcrumb.Item>
        </Breadcrumb>
        <Layout className="manager-post-layout">
          <Sider className="manager-post-option">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              {options.map((item) => (
                <Menu.Item key={item}>{item}</Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Sider>
            <Router>
              <Menu mode="horizontal" className="slide-post-status">
                {postStatus.map((item) => (
                  <Menu.Item key={item}>
                    <Link to={item.link}>{item.title}</Link>
                  </Menu.Item>
                ))}
              </Menu>
            </Router>
            {/* Ai lam cai gi thi ghi cai do vao day switch */}
          </Sider>
        </Layout>
      </div>
    </div>
  );
}

export default ManagerPost;
