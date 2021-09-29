import React, { useState } from "react";

import {
  Form,
  Input,
  InputNumber,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Radio,
} from "antd";

function Post(props) {
  const { Option } = Select;
  const { TextArea } = Input;
  const residences = [
    {
      value: "zhejiang",
      label: "Zhejiang",
      children: [
        {
          value: "hangzhou",
          label: "Hangzhou",
          children: [
            {
              value: "xihu",
              label: "West Lake",
            },
          ],
        },
      ],
    },
    {
      value: "jiangsu",
      label: "Jiangsu",
      children: [
        {
          value: "nanjing",
          label: "Nanjing",
          children: [
            {
              value: "zhonghuamen",
              label: "Zhong Hua Men",
            },
          ],
        },
      ],
    },
  ];
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  //Post Type - Start
  const [postType, setPostType] = React.useState("");

  const valuePostType = ["Tìm ở ghép", "Cho thuê trọ"];

  const onChangePostType = (e) => {
    setPostType(e.target.value);
  };
  //Post Type - End

  //Room Type - Start
  const [roomType, setRoomType] = React.useState("");

  const valueRoomType = [
    "Ký túc xá",
    "Phòng trọ cho thuê",
    "Nhà nguyên căn",
    "Chung cư mini",
  ];

  const onChangeRoomType = (e) => {
    setRoomType(e.target.value);
  };
  //Room Type - End

  //Number Room Available - Start
  function onChangeNumberRoomAvaiable(value) {}
  //Number Room Available - End

  //Number Person Per Room - Start
  function onChangeNumberPersonPerRoom(value) {}
  //Number Person Per Room - End

  //Gender - Start
  const [gender, setGender] = React.useState("");

  const valueGender = ["Tất cả", "Nam", "Nữ"];

  const onChangeGender = (e) => {
    setPostType(e.target.value);
  };
  //Gender - End

  //Utilities - Start
  const utilities = [
    "WC riêng",
    "Cửa sổ",
    "Chủ riêng",
    "Bình nóng lạnh",
    "Tủ lạnh",
    "Gác lửng",
    "Tủ đồ",
    "Thú cưng",
    "Bảo vệ",
    "Camera an ninh",
    "Điều hoà",
    "Nhà bếp",
    "Máy giặt",
    "Giường",
    "Tivi",
    "Ban công",
  ];
  //Utilities - End

//Strict Time - Start
const [strictTime, setStrictTime] = React.useState("");

const valueStrictTime = [
  "Có",
  "Không",
];

const onChangeStrictTime = (e) => {
    setStrictTime(e.target.value);
};
//Strict Time - End

  return (
    <Form
      {...formItemLayout}
      //   form={form}
      name="post"
    >
      <Form.Item label="Thông tin của phòng" />
      <Form.Item
        name="post-type"
        label="Loại hình"
        rules={[
          {
            required: true,
            message: "Hãy chọn loại hình!",
          },
        ]}
      >
        <Radio.Group
          options={valuePostType}
          onChange={onChangePostType}
          value={postType}
        />
      </Form.Item>
      <Form.Item
        name="room-type"
        label="Hình thức trọ"
        rules={[
          {
            required: true,
            message: "Hãy chọn hình thức trọ!",
          },
        ]}
      >
        <Radio.Group
          options={valueRoomType}
          onChange={onChangeRoomType}
          value={roomType}
        />
      </Form.Item>
      <Form.Item
        name="number-room-available"
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
          defaultValue={3}
          onChange={onChangeNumberRoomAvaiable}
        />
      </Form.Item>
      <Form.Item
        name="number-person-per-room"
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
          defaultValue={2}
          onChange={onChangeNumberPersonPerRoom}
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
          options={valueGender}
          onChange={onChangeGender}
          value={gender}
        />
      </Form.Item>
      <Form.Item
        name="price"
        label="Giá cho thuê (đơn vị: VND/căn, VND/phòng, VND/người *Cần chỉnh sửa đoạn này)"
        rules={[
          {
            required: true,
            message: "Hãy nhập giá cho thuê!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="deposit" label="Giá tiền đặt cọc">
        <Input />
      </Form.Item>
      <Form.Item
        name="electric-price"
        label="Giá điện"
        rules={[
          {
            required: true,
            message: "Hãy nhập giá điện!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="water-price"
        label="Giá nước"
        rules={[
          {
            required: true,
            message: "Hãy nhập giá nước!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="internet-price"
        label="Giá internet/truyền hình cáp"
        rules={[
          {
            required: true,
            message: "Hãy nhập giá internet/truyền hình cáp!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="other-price" label="Giá chi phí khác">
        <Input />
      </Form.Item>
      <Form.Item
        name="location"
        label="Địa chỉ"
        rules={[
          {
            type: "array",
            required: true,
            message: "Hãy nhập địa chỉ khu trọ của bạn!",
          },
        ]}
      >
        <Cascader options={residences} />
      </Form.Item>
      <br/>
      <Form.Item label="Tiện ích" />
      <br/>
      <Form.Item
        name="image"
        label="Hình ảnh"
        rules={[
          {
            required: true,
            message: "Hãy tải hình ảnh lên!",
          },
        ]}
      ></Form.Item>
      <Form.Item name="utilities" label="Tiện ích">
        {utilities.map((item) => {
          return <Checkbox>{item}</Checkbox>;
        })}
      </Form.Item>
      <Form.Item label="Xác nhận thông tin" />
      <Form.Item
        name="phone"
        label="Số điện thoại"
        rules={[
          {
            required: true,
            message: "Hãy nhập số điện thoại của bạn!",
          },
        ]}
      >
        <Input
            addonBefore={prefixSelector}
          style={{
            width: "100%",
          }}
        />
      </Form.Item>
      <Form.Item
        name="caption"
        label="Tiêu đề bài đăng"
      >
        <Input/>
      </Form.Item>
      <Form.Item
        name="content"
        label="Nội dung mô tả"
      >
        <TextArea rows={4} />
        </Form.Item>
      
        <Form.Item
        name="strict-time"
        label="Thiết lập giờ giới nghiêm (viết tạm thế này, tính sau)"
        rules={[
          {
            required: true,
            message: "Hãy chọn thiết lập giờ giới nghiêm hoặc không!",
          },
        ]}
      >
        <Radio.Group
          options={valueStrictTime}
          onChange={onChangeStrictTime}
          value={strictTime}
        />
      </Form.Item>

      <Form.Item name="StrictTimeStart" label="Thời gian bắt đầu">
        <Input />
      </Form.Item>
      <Form.Item name="StrictTimeEnd" label="Thời gian kết thúc">
        <Input />
      </Form.Item>
      
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          Tôi đã đọc kỹ thông tin
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Đăng bài
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Post;
