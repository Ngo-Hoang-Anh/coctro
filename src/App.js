import React from "react";
import './App.css';
import 'antd/dist/antd.css';
import { Layout } from "antd";
import HeaderCommon from "./components/commons/Header/HeaderCommon";
import FooterCommon from "./components/commons/Footer/FooterCommon";

const { Header, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <HeaderCommon />
      </Header>
      {/* <Content style={{ padding: '0 50px' }}>
        
      </Content> */}
      {/* <Footer>
        <FooterCommon />
      </Footer> */}
    </Layout>
  )
}

export default App;
