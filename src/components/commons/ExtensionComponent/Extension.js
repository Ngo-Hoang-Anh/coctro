import { Button } from "antd";
import React from "react";
import "./Extension.css";
const Extension = (props) => {
  const buttons = props.buttons;
  const WrappedComponent = props.WrappedComponent;
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <WrappedComponent />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {buttons.map((button) => {
            return (
              <Button
                key={props.id + "-" + button.label}
                className="extension-button"
                style={{
                  background: button.color,
                }}
                onClick={() => button.onClick(props.id)}
              >
                {button.label}
              </Button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Extension;
