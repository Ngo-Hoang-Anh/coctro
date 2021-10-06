import React, { useEffect, useState } from "react";
import "./ManagerPost.css";
import ListPost from "../ListPost/ListPost";
import { Layout, Menu } from "antd";
import { sendRequest } from "../../../common/utility";
import { useHistory } from "react-router-dom";
const { Sider } = Layout;

function ManagerPost(props) {
  let history = useHistory();
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
    const path = "/post-manager";
    let token = window.localStorage.getItem("token").toString();
    const myInit = {
      method: "GET",
      headers: {
        Authorization: token,
      },
    };
    sendRequest(path, myInit).then((result) => {
      if (result.error == null) {
        setData([...result]);
      } else {
        window.alert("Error:" + result.error);
      }
    });
  };
  //butons-start
  const Delete = (id) => {
    console.log("delete" + id);
  };
  const UpdatePost = (id) => {
    history.push("/update-post/" + id);
  };
  const pendingButtons = [
    {
      label: "Xoá",
      onClick: Delete,
      color: "red",
    },
    {
      label: "Chỉnh sửa",
      onClick: UpdatePost,
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
      onClick: UpdatePost,
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
      onClick: UpdatePost,
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
      onClick: UpdatePost,
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

  useEffect(() => {
    updateData();
  }, [statusFilter, roomTypeFilter]);

  return (
    <div className="manager-post-container">
      <div className="left-sider">
        <Sider className="manager-post-option">
          <Menu
            style={{ height: "100%", borderRight: 0 }}
            defaultSelectedKeys={roomTypeOptions[0].value}
          >
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
          <Menu
            mode="horizontal"
            className="slide-post-status"
            defaultSelectedKeys={postStatus[0].value}
          >
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
          <ListPost buttons={buttons} data={data} />
        </div>
      </div>
    </div>
  );
}

export default ManagerPost;
