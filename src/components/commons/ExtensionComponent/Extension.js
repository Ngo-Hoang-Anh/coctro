import { Button } from "antd";
import React from "react";

const Extension = (props) => {
  const buttons = props.buttons;
  const WrappedComponent = props.WrappedComponent;
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <WrappedComponent />
        <div style={{ display: "flex", flexDirection: "column" }}>
          {buttons.map((button) => {
            return (
              <>
                <Button
                  style={{ background: button.color, color: "white" }}
                  onClick={() => button.onClick(props.id)}
                >
                  {button.label}
                </Button>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Extension;
