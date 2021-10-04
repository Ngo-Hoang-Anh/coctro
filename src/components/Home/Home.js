import React from "react";
import ListPost from "../Post/ListPost/ListPost";
function Home(props) {
  const data = [
    {
      id: 1,
      title: "Nhà trọ Xanh Lá",
      room_type: "Nhà trọ",
      gender: "Nam & Nữ",
      area: "20m²",
      location: "Địa chỉ",
      price: "5 tr/căn",
      roomAvailable: "3",
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      id: 2,
      title: "Trọ Tâm Lê",
      room_type: "Nhà trọ",
      gender: "Nam & Nữ",
      area: "20m²",
      location: "Địa chỉ",
      price: "5 tr/căn",
      roomAvailable: "3",
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      id: 3,
      title: "Trọ chị Hạnh",
      room_type: "Nhà trọ",
      gender: "Nam & Nữ",
      area: "20m²",
      location: "Địa chỉ",
      price: "5 tr/căn",
      roomAvailable: "3",
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      id: 4,
      title: "Trọ Tuấn Cường",
      room_type: "Nhà trọ",
      gender: "Nam & Nữ",
      area: "20m²",
      location: "Địa chỉ",
      price: "5 tr/căn",
      roomAvailable: "3",
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      id: 5,
      title: "Chung cư mini 68",
      room_type: "Nhà trọ",
      gender: "Nam & Nữ",
      area: "20m²",
      location: "Địa chỉ",
      price: "5 tr/căn",
      roomAvailable: "3",
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      id: 6,
      title: "Nhà trọ Thu Thuỷ",
      room_type: "Nhà trọ",
      gender: "Nam & Nữ",
      area: "20m²",
      location: "Địa chỉ",
      price: "5 tr/căn",
      roomAvailable: "3",
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ];
  return <ListPost data={data} />;
}

export default Home;
