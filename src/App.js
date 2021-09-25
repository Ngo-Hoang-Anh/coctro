import React from "react";
import './App.css';
import 'antd/dist/antd.css';

import { Layout, Breadcrumb } from "antd";
import HeaderCommon from "./components/commons/header/HeaderCommon";
import FooterCommon from "./components/commons/Footer/FooterCommon";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <HeaderCommon/>
      </Header>
      {/* <Content style={{ padding: '0 50px' }}>
        
      </Content> */}
    <Footer style={{ textAlign: 'center' }}>
      <FooterCommon/>
    </Footer>
    </Layout>
  )
}

export default App;
