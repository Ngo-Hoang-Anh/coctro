import React, { useState } from "react";
import { sendRequest } from '../../../common/utility';
import { useHistory } from "react-router-dom";
import { Form, Input, InputNumber, Cascader, Select, Checkbox, Button, Radio } from "antd";
import './Post.css';

function Post(props) {
  let history = useHistory();
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

  //Post Type - Start
  const [postType, setPostType] = useState("");
  const valuePostType = ["Tìm ở ghép", "Cho thuê trọ"];
  const [priceUnit, setPriceUnit] = useState("Giá cho thuê:");
  const onChangePostType = (e) => {
    setPostType(e.target.value);
  };
  //Post Type - End

  //Room Type - Start
  const [roomType, setRoomType] = useState("");

  const valueRoomType = [
    "Ký túc xá",
    "Phòng trọ cho thuê",
    "Nhà nguyên căn",
    "Chung cư mini",
  ];

  const onChangeRoomType = (e) => {
    let value = e.target.value;
    setRoomType(value);
    if (value === "Ký túc xá") {
      setPriceUnit("Giá cho thuê (đơn vị:VND/người)");
    } else if (value === "Phòng trọ cho thuê") {
      setPriceUnit("Giá cho thuê (đơn vị: VND/phòng)");
    } else if (value === "Nhà nguyên căn" || value === "Chung cư mini") {
      setPriceUnit("Giá cho thuê (đơn vị: VND/căn)");
    } else {
      setPriceUnit("Giá cho thuê:");
    }
  };
  //Room Type - End

  //Number Room Available - Start
  function onChangeNumberRoomAvaiable(value) { }
  //Number Room Available - End

  //Number Person Per Room - Start
  function onChangeNumberPersonPerRoom(value) { }
  //Number Person Per Room - End

  //Gender - Start
  const [gender, setGender] = useState("");

  const valueGender = ["Tất cả", "Nam", "Nữ"];

  const onChangeGender = (e) => {
    setPostType(e.target.value);
  };
  //Gender - End

  //Utilities - Start
  const utilities = [
    { label: "WC riêng", value: "WC riêng" },
    { label: "Cửa sổ", value: "Cửa sổ" },
    { label: "Chủ riêng", value: "Chủ riêng" },
    { label: "Bình nóng lạnh", value: "Bình nóng lạnh" },
    { label: "Tủ lạnh", value: "Tủ lạnh" },
    { label: "Gác lửng", value: "Gác lửng" },
    { label: "Tủ đồ", value: "Tủ đồ" },
    { label: "Thú cưng", value: "Thú cưng" },
    { label: "Bảo vệ", value: "Bảo vệ" },
    { label: "Camera an ninh", value: "Camera an ninh" },
    { label: "Điều hoà", value: "Điều hoà" },
    { label: "Nhà bếp", value: "Nhà bếp" },
    { label: "Máy giặt", value: "Máy giặt" },
    { label: "Giường", value: "Giường" },
    { label: "Tivi", value: "Tivi" },
    { label: "Ban công", value: "Ban công" }
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
  let chosenUltilities = [];
  const updateUltilities = (checkedValue) => {
    console.log(checkedValue);
    chosenUltilities = [...checkedValue];
  }

  //Strict Time - End
  const onFinish = (values) => {
    //TODO: validate
    const path = '/post-manager';
    const myInit = {
      method: 'POST',
      body: JSON.stringify({
        postType: values.postType,
        roomType: values.roomType,
        numberRoomAvailable: values.numberRoomAvailable,
        numberPeoplePerRoom: values.numberPeoplePerRoom,
        gender: values.gender,
        deposit: values.deposit,
        electricPrice: values.electricPrice,
        waterPrice: values.waterPrice,
        internetPrice: values.internetPrice,
        otherPrice: values.otherPrice,
        location: values.location,
        utilities: [...chosenUltilities],
        phone: values.phone,
        caption: values.caption,
        description: values.description,
        strictTime: values.strictTime,
        StrictTimeStart: values.StrictTimeStart,
        StrictTimeEnd: values.StrictTimeEnd
      }),
    }
    console.log(myInit.body);
    sendRequest(path, myInit)
      .then(result => {
        if (result.error == null) {
          window.alert("Error:" + result.error);
        } else {
          window.alert("New Post created Successfully");
          history.push("/home");
        }
      }
      );;
  };
  return (
    <div className="container">
      <Form
      {...formItemLayout}
      //   form={form}
      name="post"
      onFinish={onFinish}
    >
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
          options={valuePostType}
          onChange={onChangePostType}
          value={postType}
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
          options={valueRoomType}
          onChange={onChangeRoomType}
          value={roomType}
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
          defaultValue={3}
          onChange={onChangeNumberRoomAvaiable}
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

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Tiếp theo
        </Button>
      </Form.Item>
      <h1>Thông tin chi tiết:</h1>
      <Form.Item
        name="price"
        label={priceUnit}
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
        name="electricPrice"
        label="Giá điện"
        rules={[
          {
            message: "Hãy nhập giá điện!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="waterPrice"
        label="Giá nước"
        rules={[
          {
            message: "Hãy nhập giá nước!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="internetPrice"
        label="Giá internet/truyền hình cáp"
        rules={[
          {
            message: "Hãy nhập giá internet/truyền hình cáp!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="otherPrice" label="Giá chi phí khác">
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
      <Form.Item
        name="image"
        label="Hình ảnh"
        rules={[
          {
            required: false,
            message: "Hãy tải ít nhất 4 hình ảnh lên!",
          },
        ]}
      ></Form.Item>
      <Form.Item name="utilities" label="Tiện ích">
        <Checkbox.Group options={utilities} onChange={updateUltilities} />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Quay lại
        </Button>
        <Button type="primary" htmlType="submit">
          Tiếp theo
        </Button>
      </Form.Item>
      <h1>Thông tin bài đăng:</h1>
      <Form.Item
        name="phone"
        label="Số điện thoại"
        rules={[
          {

            required: true,
            message: 'Hãy nhập số điện thoại!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="caption"
        label="Tiêu đề bài đăng"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="Nội dung mô tả"
      >
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item
        name="strictTime"
        label="Giờ giới nghiêm"
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
      {
        strictTime === "Có" && <>
          <Form.Item name="StrictTimeStart" label="Thời gian bắt đầu">
            <Input />
          </Form.Item>
          <Form.Item name="StrictTimeEnd" label="Thời gian kết thúc">
            <Input />
          </Form.Item>
        </>
      }
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
        {/* <Checkbox>
          Tôi đã đọc kỹ thông tin
        </Checkbox> */}
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
      <Button type="primary" htmlType="submit">
          Quay lại
        </Button>
        <Button type="primary" htmlType="submit">
          Đăng bài
        </Button>
        Đề xuất bấm vào đăng bài thì sẽ cho xem preview trước, rồi bấm oke thì mới đăng
      </Form.Item>
    </Form >
    </div>
  );
}

export default Post;
