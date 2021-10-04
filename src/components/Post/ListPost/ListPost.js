import React from "react";
import { List } from 'antd';
import PostHome from '../PostHome/PostHome';
const data = [
  {
    id: 1,
    title: 'Nhà trọ Xanh Lá',
    room_type: 'Nhà trọ',
    gender: "Nam & Nữ",
    area: "20m²",
    location: "Địa chỉ",
    price: "5 tr/căn",
    roomAvailable: "3",
    src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    id: 2,
    title: 'Trọ Tâm Lê',
    room_type: 'Nhà trọ',
    gender: "Nam & Nữ",
    area: "20m²",
    location: "Địa chỉ",
    price: "5 tr/căn",
    roomAvailable: "3",
    src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    id: 3,
    title: 'Trọ chị Hạnh',
    room_type: 'Nhà trọ',
    gender: "Nam & Nữ",
    area: "20m²",
    location: "Địa chỉ",
    price: "5 tr/căn",
    roomAvailable: "3",
    src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    id: 4,
    title: 'Trọ Tuấn Cường',
    room_type: 'Nhà trọ',
    gender: "Nam & Nữ",
    area: "20m²",
    location: "Địa chỉ",
    price: "5 tr/căn",
    roomAvailable: "3",
    src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    id: 5,
    title: 'Chung cư mini 68',
    room_type: 'Nhà trọ',
    gender: "Nam & Nữ",
    area: "20m²",
    location: "Địa chỉ",
    price: "5 tr/căn",
    roomAvailable: "3",
    src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    id: 6,
    title: 'Nhà trọ Thu Thuỷ',
    room_type: 'Nhà trọ',
    gender: "Nam & Nữ",
    area: "20m²",
    location: "Địa chỉ",
    price: "5 tr/căn",
    roomAvailable: "3",
    src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
];

const postShow = (status) => {
    if(status === "all"){
        return <List
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <PostHome src={item.src} title={item.title} room_type={item.room_type} gender={item.gender} area={item.area} location={item.location} price={item.price} roomAvailable={item.roomAvailable} />
          </List.Item>
        )}
      />;
    } 

    const postShowList = data.filter(item => item.title === status);
    return <List
        dataSource={postShowList}
        renderItem={item => (
          <List.Item>
            <PostHome src={item.src} title={item.title} room_type={item.room_type} gender={item.gender} area={item.area} location={item.location} price={item.price} roomAvailable={item.roomAvailable} />
          </List.Item>
        )}
      />;
}

function ListPost(props) {
  return <List
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <PostHome src={item.src} title={item.title} room_type={item.room_type} gender={item.gender} area={item.area} location={item.location} price={item.price} roomAvailable={item.roomAvailable} />
      </List.Item>
    )}
  />;
}

export default ListPost;
