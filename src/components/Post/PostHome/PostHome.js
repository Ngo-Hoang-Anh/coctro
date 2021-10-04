import React from "react";
import { Image } from "antd";
import "./PostHome.css";
import {
  HomeFilled,
  TeamOutlined,
  AreaChartOutlined,
  EnvironmentFilled,
  ContactsFilled,
} from "@ant-design/icons";

function PostHome(props) {
  const {
    src,
    title,
    room_type,
    gender,
    area,
    location,
    price,
    roomAvailable,
  } = props;
  return (
    <div className="posthome-contain">
      <Image width={200} src={src} id="image" />

      <div className="posthome-information">
        <div id="posthome-title">{title}</div>
        <div>
          <HomeFilled id="icon-room" />
          {room_type}
        </div>
        <div>
          <TeamOutlined id="icon-gender" />
          {gender}
          <AreaChartOutlined id="icon-area" />
          {area}
        </div>
        <div>
          <ContactsFilled id="icon-room-available" />
          {roomAvailable} phòng trống
        </div>
        <div>
          <EnvironmentFilled id="icon-location" />
          {location}
        </div>
      </div>
      <div id="posthome-price">{price}</div>
    </div>
  );
}

export default PostHome;
