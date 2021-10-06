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
  let address = "";
  try {
    address = location[0] + "," + location[1];
  } catch (e) {
    address = "";
  }
  let cost = "";
  try {
    cost = price[0] + "-" + price[1];
  } catch (e) {
    cost = price;
  }

  return (
    <div className="posthome-contain">
      <Image width={200} src={src} id="image" />
      <div className="posthome-information">
        <div className="posthome-title">{<h1>{title}</h1>}</div>
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
          {address}
        </div>
      </div>
      <div className="posthome-price">{<b>{cost} tr</b>}</div>
    </div>
  );
}

export default PostHome;
