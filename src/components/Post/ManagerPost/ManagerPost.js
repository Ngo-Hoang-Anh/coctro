import React, { useEffect, useState } from "react";
import "./ManagerPost.css";
import ListPost from "../ListPost/ListPost";

import { Layout, Menu, Breadcrumb } from "antd";

const { Sider } = Layout;

function ManagerPost(props) {
  const fakeData = [
    {
      id: 1,
      title: "Nhà trọ Xanh Lá",
      room_type: "Nhà trọ",
      gender: "Nam & Nữ",
      area: "20m²",
      location:
        "một cái địa chỉ khá là dài lorem ipsummột cái địa chỉ khá là dài lorem ipsummột cái địa chỉ khá là dài lorem ipsum",
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
  const roomTypeOptions = [
    { value: "all", label: "Tất cả" },
    { value: "rentalRoom", label: "Phòng cho thuê" },
    { value: "sharedRoom", label: "Tìm ở ghép" },
  ];
  const [roomTypeFilter, setRoomTypeFilter] = useState("Tất cả");

  const postStatus = [
    { value: "pending", label: "Bài đăng đang chờ duyệt" },
    { value: "approved", label: "Bài đăng đã được duyệt" },
    { value: "disapproved", label: "Bài đăng bị từ chối" },
    { value: "expired", label: "Bài đăng đã hết hạn" },
  ];
  //data -start
  const [statusFilter, setStatusFilter] = useState("pending");
  const [page, setPage] = useState(1);

  const [data, setData] = useState([]);
  //data -end
  const updateData = () => {
    console.log(roomTypeFilter, statusFilter);
    if (statusFilter === "pending") {
      setButtons(pendingButtons);
    } else if (statusFilter === "approved") {
      setButtons(approvedButtons);
    } else if (statusFilter === "disapproved") {
      setButtons(disapprovedButtons);
    } else if (statusFilter === "expired") {
      setButtons(expiredButtons);
    }
    //update data here
  };
  //butons-start
  const Delete = (id) => {
    console.log(id);
  };
  const pendingButtons = [
    {
      label: "Xoá",
      onClick: Delete,
      color: "red",
    },
    {
      label: "Chỉnh sửa",
      onClick: Delete,
      color: "blue",
    },
  ];
  const approvedButtons = [
    {
      label: "Xoá",
      onClick: Delete,
      color: "red",
    },
    {
      label: "Chỉnh sửa",
      onClick: Delete,
      color: "blue",
    },
    {
      label: "Cập nhật số phòng",
      onClick: Delete,
      color: "green",
    },
  ];
  const disapprovedButtons = [
    {
      label: "Xoá",
      onClick: Delete,
      color: "red",
    },
    {
      label: "Chỉnh sửa",
      onClick: Delete,
      color: "blue",
    },
  ];
  const expiredButtons = [
    {
      label: "Xoá",
      onClick: Delete,
      color: "red",
    },
    {
      label: "Chỉnh sửa",
      onClick: Delete,
      color: "blue",
    },
    {
      label: "Xin duyệt",
      onClick: Delete,
      color: "green",
    },
  ];
  const [buttons, setButtons] = useState(pendingButtons);
  //buttons-end

  useEffect(() => updateData(), [statusFilter, roomTypeFilter, updateData]);

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
        <Sider>
          <Menu mode="horizontal" className="slide-post-status">
            {postStatus.map((item) => (
              <Menu.Item
                key={item.value}
                onClick={() => setStatusFilter(item.value)}
              >
                {item.label}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <div className="manager-post-container-detail">
          <ListPost buttons={buttons} data={fakeData} />
        </div>
      </div>
    </div>
  );
}

export default ManagerPost;
