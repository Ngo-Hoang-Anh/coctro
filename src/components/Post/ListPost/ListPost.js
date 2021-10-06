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
        <>
          <List.Item key={item.post_id}>
            <Extension
              id={item.post_id}
              buttons={buttons}
              WrappedComponent={() => {
                return (
                  <PostHome
                    src={item.post_gallery[0]}
                    title={item.post_title}
                    room_type={item.motel_type}
                    gender={item.room_gender}
                    area={item.room_area}
                    location={item.motel_address}
                    price={item.room_cost.rental_cost}
                    roomAvailable={item.room_available}
                  />
                );
              }}
            />
          </List.Item>
        </>
      )}
    />
  );
}

export default ListPost;
