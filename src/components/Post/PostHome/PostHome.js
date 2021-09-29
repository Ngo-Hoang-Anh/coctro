import React from "react";
import { Image } from "antd";

function PostHome(props) {
    const src = props.src;
  return (
    <div>
      <Image
        width={200}
        src={src}
      />
    </div>
  );
}

export default PostHome;
