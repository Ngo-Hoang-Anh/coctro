import React from "react";
import { List } from 'antd';
import PostHome from '../Post/PostHome/PostHome';
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
        <PostHome src={item.src} title={item.title} room_type={item.room_type} gender={item.gender} area={item.area} location={item.location} price={item.price} roomAvailable={item.roomAvailable} />
      </List.Item>
    )}
  />;
}

export default Home;
