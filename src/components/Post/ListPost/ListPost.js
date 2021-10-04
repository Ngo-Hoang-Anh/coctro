import React from "react";
import { List } from "antd";
import PostHome from "../PostHome/PostHome";
import Extension from "../../commons/ExtensionComponent/Extension";

function ListPost(props) {
  const data = props.data;
  const buttons = props.buttons;
  return (
    <List
      dataSource={data}
      renderItem={(item) => (
        <List.Item key={item.title}>
          <Extension
            id={item.title}
            buttons={buttons}
            WrappedComponent={() => {
              return (
                <PostHome
                  src={item.src}
                  title={item.title}
                  room_type={item.room_type}
                  gender={item.gender}
                  area={item.area}
                  location={item.location}
                  price={item.price}
                  roomAvailable={item.roomAvailable}
                />
              );
            }}
          />
        </List.Item>
      )}
    />
  );
}

export default ListPost;
