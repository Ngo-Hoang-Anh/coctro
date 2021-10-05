import React, { useEffect, useState } from "react";
import ListPost from "../Post/ListPost/ListPost";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

function Home(props) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const roomTypeOptions = [
    { value: "all", label: "Tất cả" },
    { value: "rentalRoom", label: "Phòng cho thuê" },
    { value: "sharedRoom", label: "Tìm ở ghép" },
  ];
  const [roomTypeFilter, setRoomTypeFilter] = useState("Tất cả");
  const fakeData = [
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
  const updateData = () => {
    //update data here
    console.log(roomTypeFilter);
  };
  useEffect(() => updateData(), [roomTypeFilter]);
  return (
    <div className="manager-post-container">
      <div className="left-sider">
        <Sider className="manager-post-option">
          <Menu style={{ height: "100%", borderRight: 0 }}>
            {roomTypeOptions.map((item) => (
              <Menu.Item
                key={item.value}
                onClick={() => setRoomTypeFilter(item.value)}
              >
                {item.label}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
      </div>
      <div className="right-container">
        <div className="manager-post-container-detail">
          <ListPost buttons={[]} data={fakeData} />
        </div>
      </div>
    </div>
  );
}

export default Home;
