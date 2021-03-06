import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import HeaderCommon from "./components/commons/Header/HeaderCommon";

const { Header } = Layout;

function App() {
  return (
    <div className="mainLayout">
      <Header>
        <HeaderCommon />
      </Header>
    </div>
  );
}

export default App;
