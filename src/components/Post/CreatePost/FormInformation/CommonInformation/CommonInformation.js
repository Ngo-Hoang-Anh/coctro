import React from "react";
import "../CommonInformation.css";

import { Form, Radio, InputNumber, Button } from "antd";

function CommonInformation(props) {
  return (
    <div className="container-common-information">
      <Form {...props.formItemLayout}>
        <h1>Thông tin chung:</h1>
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
            onChange={props.onChangePostType}
            value={props.postType}
            defaultValue={props.postType}
          />
        </Form.Item>
        <Form.Item
          name="roomType"
          label="Hình thức trọ"
          rules={[
            {
              required: true,
              message: "Hãy chọn hình thức trọ!",
            },
          ]}
        >
          <Radio.Group
            options={props.valueRoomType}
            onChange={props.onChangeRoomType}
            value={props.roomType}
            defaultValue={props.roomType}
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
            onChange={props.onChangeNumberRoomAvaiable}
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
            onChange={props.onChangeNumberPersonPerRoom}
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
            onChange={props.onChangeGender}
            value={props.gender}
            defaultValue={props.gender}
          />
        </Form.Item>

        <Form.Item {...props.tailFormItemLayout}>
          <Button
            type="primary"
            onClick={(e) => props.nextBack("detail-information")}
          >
            Tiếp theo
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default CommonInformation;
