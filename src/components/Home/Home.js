import React from "react";
import { List, Card } from 'antd';
import PostHome from '../Post/PostHome/PostHome';
import { HomeFilled, TeamOutlined, AreaChartOutlined, EnvironmentFilled, DollarCircleFilled, ContactsFilled } from '@ant-design/icons';

const data = [
  {
    title: 'Nhà trọ Xanh Lá',
    room_type: 'Nhà trọ',
    gender: "Nam & Nữ",
    area: "20m2",
    location: "Địa chỉ",
    price: "5 tr/căn",
    roomAvailable: "3",
    src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    title: 'Trọ Tâm Lê',
    room_type: 'Nhà trọ',
    gender: "Nam & Nữ",
    area: "20m2",
    location: "Địa chỉ",
    price: "5 tr/căn",
    roomAvailable: "3",
    src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    title: 'Trọ chị Hạnh',
    room_type: 'Nhà trọ',
    gender: "Nam & Nữ",
    area: "20m2",
    location: "Địa chỉ",
    price: "5 tr/căn",
    roomAvailable: "3",
    src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    title: 'Trọ Tuấn Cường',
    room_type: 'Nhà trọ',
    gender: "Nam & Nữ",
    area: "20m2",
    location: "Địa chỉ",
    price: "5 tr/căn",
    roomAvailable: "3",
    src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    title: 'Chung cư mini 68',
    room_type: 'Nhà trọ',
    gender: "Nam & Nữ",
    area: "20m2",
    location: "Địa chỉ",
    price: "5 tr/căn",
    roomAvailable: "3",
    src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    title: 'Nhà trọ Thu Thuỷ',
    room_type: 'Nhà trọ',
    gender: "Nam & Nữ",
    area: "20m2",
    location: "Địa chỉ",
    price: "5 tr/căn",
    roomAvailable: "3",
    src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
];

function Home(props) {
    return <List
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <PostHome src = {item.src}/>
        {item.title}<br/>
        <HomeFilled />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.room_type}<br/>
        <TeamOutlined />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.gender}<br/>
        <AreaChartOutlined />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.area}<br/>
        <EnvironmentFilled />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.location}<br/>
        <DollarCircleFilled />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.price}<br/>
        <ContactsFilled />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.roomAvailable} phòng trống
    </List.Item>
    )}
  />;
}

export default Home;
