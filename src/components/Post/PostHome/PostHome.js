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
        <div className="posthome-title">
          <h1>{title}</h1>
        </div>
        <div>
          <HomeFilled className="icon-room" />
          {room_type}
        </div>
        <div>
          <TeamOutlined className="icon-gender" />
          {gender}
          <AreaChartOutlined className="icon-area" />
          {area}
        </div>
        <div>
          <ContactsFilled className="icon-room-available" />
          {roomAvailable} phòng trống
        </div>
        <div>
          <EnvironmentFilled className="icon-location" />
          {location}
        </div>
      </div>
      <div className="posthome-price">
        <b>{price}</b>
      </div>
    </div>
  );
}

export default PostHome;
