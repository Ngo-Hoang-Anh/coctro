import React, { useEffect } from "react";
import "../CommonInformation.css";

import { Form, Radio, InputNumber, Button, Input } from "antd";

function CommonInformation(props) {
  const onFinish = () => {
    props.nextBack("detail-information");
  };
  const [form] = Form.useForm();
  const loadData = () => {
    form.setFieldsValue({
      roomName: props.roomName,
      numberRoomAvailable: props.numberRoomAvailable,
      numberPeoplePerRoom: props.numberPeoplePerRoom,
      area: props.area,
      gender: props.gender,
    });
  };
  useEffect(loadData, []);
  return (
    <div className="container-create-post">
      <Form form={form} {...props.formItemLayout} onFinish={(e) => onFinish()}>
        <span id="span-title">Thông tin chung:</span>
        <br />
        <br />
        <br />
        <Form.Item name="postType" label="Loại hình">
          <Radio.Group
            options={props.valuePostType}
            onChange={(e) => props.setPostType(e.target.value)}
            value={props.postType}
            defaultValue={props.postType}
          />
        </Form.Item>
        <Form.Item name="roomType" label="Loại phòng">
          <Radio.Group
            options={props.valueRoomType}
            onChange={(e) => props.setRoomType(e.target.value)}
            value={props.roomType}
            defaultValue={props.roomType}
          />
        </Form.Item>
        <Form.Item
          name="roomName"
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
            onChange={(e) => {
              props.setRoomName(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          name="numberRoomAvailable"
          label="Số lượng phòng trống (đơn vị: phòng)"
          rules={[
            {
              required: true,
              pattern: /^[0-9]*$/,
              message: "Hãy chọn số phòng trống",
            },
          ]}
        >
          <InputNumber
            min={0}
            value={props.numberRoomAvailable}
            defaultValue={props.numberRoomAvailable}
            onChange={(value) => props.setNumberRoomAvailable(value)}
            keyboard={false}
          />
        </Form.Item>
        <Form.Item
          name="numberPeoplePerRoom"
          label="Sức chứa (đơn vị: người/phòng)"
          rules={[
            {
              required: true,
              pattern: /^[0-9]*$/,
              message: "Hãy chọn số người 1 phòng",
            },
          ]}
        >
          <InputNumber
            min={1}
            value={props.numberPeoplePerRoom}
            defaultValue={props.numberPeoplePerRoom}
            onChange={(value) => props.setNumberPeoplePerRoom(value)}
            keyboard={false}
          />
        </Form.Item>
        <Form.Item
          name="area"
          label="Diện tích (đơn vị: m2):"
          rules={[
            {
              required: true,
              pattern: /^[1-9][0-9]*$/,
              message: "Hãy nhập diện tích phòng hợp lệ",
            },
          ]}
        >
          <Input
            value={props.area}
            defaultValue={props.area}
            onChange={(e) => props.setArea(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="gender" label="Giới tính">
          <Radio.Group
            options={props.valueGender}
            onChange={(e) => props.setGender(e.target.value)}
            value={props.gender}
            defaultValue={props.gender}
          />
        </Form.Item>

        <br />
        <div id="button">
          <Button htmlType="submit" type="primary">
            Tiếp theo
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CommonInformation;
