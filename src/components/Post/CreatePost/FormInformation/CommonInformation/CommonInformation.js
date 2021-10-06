import React from "react";
import "../CommonInformation.css";

import { Form, Radio, InputNumber, Button, Input } from "antd";

function CommonInformation(props) {
  return (
    <div className="container-create-post">
      <Form {...props.formItemLayout}>
        <span id="span-title">Thông tin chung:</span>
        <br />
        <br />
        <br />
        <Form.Item
          name="postType"
          label="Loại hình"
          rules={[
            {
              required: true,
              message: "Hãy chọn loại hình!",
            },
          ]}
        >
          <Radio.Group
            options={props.valuePostType}
            onChange={(e) => props.setPostType(e.target.value)}
            value={props.postType}
            defaultValue={props.postType}
          />
        </Form.Item>
        <Form.Item
          name="roomType"
          label="Loại phòng"
          rules={[
            {
              required: true,
              message: "Hãy chọn loại phòng!",
            },
          ]}
        >
          <Radio.Group
            options={props.valueRoomType}
            onChange={(e) => props.setRoomType(e.target.value)}
            value={props.roomType}
            defaultValue={props.roomType}
          />
        </Form.Item>
        <Form.Item
          name="name"
          label="Tên trọ:"
          rules={[
            {
              required: true,
              message: "Hãy nhập tên trọ",
            },
          ]}
        >
          <Input
            value={props.roomName}
            defaultValue={props.roomName}
            onChange={(e) => props.setRoomName(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="numberRoomAvailable"
          label="Số lượng phòng trống (đơn vị: phòng)"
          rules={[
            {
              required: true,
              message: "",
            },
          ]}
        >
          <InputNumber
            min={0}
            value={props.numberRoomAvailable}
            defaultValue={props.numberRoomAvailable}
            onChange={(value) => props.setNumberRoomAvailable(value)}
          />
        </Form.Item>
        <Form.Item
          name="numberPeoplePerRoom"
          label="Sức chứa (đơn vị: người/phòng)"
          rules={[
            {
              required: true,
              message: "",
            },
          ]}
        >
          <InputNumber
            min={1}
            value={props.numberPeoplePerRoom}
            defaultValue={props.numberPeoplePerRoom}
            onChange={(value) => props.setNumberPeoplePerRoom(value)}
          />
        </Form.Item>
        <Form.Item
          name="area"
          label="Diện tích (đơn vị: m2):"
          rules={[
            {
              required: true,
              message: "Hãy nhập diện tích phòng",
            },
          ]}
        >
          <Input
            value={props.area}
            defaultValue={props.area}
            onChange={(e) => props.setArea(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Giới tính"
          rules={[
            {
              required: true,
              message: "Hãy chọn giới tính!",
            },
          ]}
        >
          <Radio.Group
            options={props.valueGender}
            onChange={(e) => props.setGender(e.target.value)}
            value={props.gender}
            defaultValue={props.gender}
          />
        </Form.Item>

        <br />
        <div id="button">
          <Button
            type="primary"
            onClick={(e) => props.nextBack("detail-information")}
          >
            Tiếp theo
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CommonInformation;
