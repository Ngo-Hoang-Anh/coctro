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
  const fakeData = [];
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
