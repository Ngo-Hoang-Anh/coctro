import React from "react";
import { Image } from "antd";
import { HomeFilled, TeamOutlined, AreaChartOutlined, EnvironmentFilled, DollarCircleFilled, ContactsFilled } from '@ant-design/icons';

function PostHome(props) {
    const {src, title, room_type, gender, area, location, price, roomAvailable } = props;
  return (
    <div>
      <Image
        width={200}
        src={src}
      />
        {title}<br/>
        <HomeFilled />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{room_type}<br/>
        <TeamOutlined />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{gender}<br/>
        <AreaChartOutlined />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{area}<br/>
        <EnvironmentFilled />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{location}<br/>
        <DollarCircleFilled />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{price}<br/>
        <ContactsFilled />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{roomAvailable} phòng trống
    </div>
  );
}

export default PostHome;
