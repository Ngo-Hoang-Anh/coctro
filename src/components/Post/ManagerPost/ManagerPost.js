import React, { useEffect, useState } from "react";
import "./ManagerPost.css";
import ListPost from "../ListPost/ListPost";
import { Layout, Menu, Modal, Button } from "antd";
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
        setMessage("Error:" + result.error);
      }
    });
  };
  //butons-start
  const [currentId, setCurrentId] = useState("");
  const [message, setMessage] = useState("");
  //delete buttons
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const deletePost = (id) => {
    setIsDeleteModalVisible(true);
    setCurrentId(id);
  };
  const confirmDelete = (cf) => {
    if (cf) {
      const path = "/post-manager/" + currentId;
      let token = window.localStorage.getItem("token").toString();
      const myInit = {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      };
      sendRequest(path, myInit).then((result) => {
        if (result.error == null) {
          updateData();
          setMessage("Post delete successfully");
        } else {
          setMessage("Error:" + result.error);
        }
      });
    }
    setIsDeleteModalVisible(false);
  };
  //re-up buttons
  const [isReUpModalVisible, setIsReUpModalVisible] = useState(false);
  const reupPost = (id) => {
    setIsReUpModalVisible(true);
    setCurrentId(id);
  };
  const confirmReUp = (cf) => {
    if (cf) {
      console.log("reup" + currentId);
    }
    setIsReUpModalVisible(false);
  };
  //update buttons
  const UpdatePost = (id) => {
    history.push("/update-post/" + id);
  };
  //button list
  const pendingButtons = [
    {
      label: "Xoá",
      onClick: deletePost,
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
      onClick: deletePost,
      color: "red",
    },
    {
      label: "Chỉnh sửa",
      onClick: UpdatePost,
      color: "blue",
    },
    {
      label: "Cập nhật số phòng",
      color: "green",
    },
  ];
  const disapprovedButtons = [
    {
      label: "Xoá",
      onClick: deletePost,
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
      onClick: deletePost,
      color: "red",
    },
    {
      label: "Chỉnh sửa",
      onClick: UpdatePost,
      color: "blue",
    },
    {
      label: "Xin duyệt",
      onClick: reupPost,
      color: "green",
    },
  ];
  const [buttons, setButtons] = useState(pendingButtons);
  //buttons-end

  useEffect(() => {
    updateData();
  }, [statusFilter, roomTypeFilter, page]);

  return (
    <>
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
      <Modal
        visible={isDeleteModalVisible}
        onOk={() => confirmDelete(true)}
        onCancel={() => confirmDelete(false)}
      >
        <h1>Bạn có chắc chắn muốn xoá bài này không?</h1>
      </Modal>
      <Modal
        visible={isReUpModalVisible}
        onOk={() => confirmReUp(true)}
        onCancel={() => confirmReUp(false)}
      >
        <h1>Xác nhận đăng lại bài viết</h1>
      </Modal>
      <Modal
        visible={message !== ""}
        title={message}
        footer={[
          <Button type="default" onClick={() => setMessage("")}>
            Close
          </Button>,
        ]}
      >
        <h1>{message}</h1>
      </Modal>
    </>
  );
}

export default ManagerPost;
