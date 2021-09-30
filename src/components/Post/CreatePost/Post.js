import React, { useState } from "react";
import { sendRequest } from '../../../common/utility';
import { useHistory } from "react-router-dom";
import { Form, Input, InputNumber, Select, Checkbox, Button, Radio, Modal } from "antd";
import { LocationPicker } from "../../commons/LocationPicker/LocationPicker";
const UploadImage = React.lazy(() => import('../../Post/CreatePost/UploadImage'));
function Post(props) {
  let history = useHistory();
  const { Option } = Select;
  const { TextArea } = Input;
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

  const valueGender = [{ label: 'Tất cả', value: 'Tất cả' }, { label: 'Nam', value: 'Nam' }, { label: 'Nữ', value: 'Nữ' }];

  //Gender - End
  //Address -Start 

  const [chosenLocation, setChosenLocation] = useState("");
  //Address-end
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
  const [chosenUltilities, setChosenUltilities] = useState([]);
  const updateUltilities = (checkedValue) => {
    console.log(checkedValue);
    setChosenUltilities([...checkedValue]);
  }
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
  //Images - Start
  const [fileList, setFileList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  //Images - End
  //
  const [isSelfGovernance, setIsSelfGovernance] = useState(false);
  const updateSelfGorvernance = (e) => {
    setIsSelfGovernance(e.target.checked);
  }

  const onFinish = (values) => {
    //TODO: validate
    const path = '/post-manager';
    let tempFileList = [];
    for (var i = 0; i < fileList.length; i++) {
      tempFileList[i] = fileList[i].thumbUrl.slice(`data:image/jpeg;base64,`.length - 1, fileList[i].thumbUrl.length);
    }
    let token = window.localStorage.getItem('token').toString();
    let locationValue = [];
    const tempLocation = [...chosenLocation];
    tempLocation.forEach((location) => {
      locationValue = [...locationValue, location.value];
    })
    console.log(locationValue);
    const myInit = {
      method: 'POST',
      headers: {
        'Authorization': token
      },
      body: JSON.stringify({
        post_type: values.postType,
        post_title: values.postTitle || values.motelName,
        motel_type: values.motelType,
        room_available: values.roomAvailable,
        max_slot_per_room: values.maxSlotPerRoom,
        room_gender: values.roomGender,
        room_area: values.roomArea,
        room_cost: {
          rental_cost: values.rentalCost,
          deposit_cost: values.depositCost,
          electricity_cost: values.electricCost,
          water_cost: values.waterCost,
          internet_cost: values.internetCost,
          clean_cost: values.cleanCost,
        },
        contact: {
          contact_numbers: [values.contactNumbers],
          contact_name: [values.contactName]
        },
        imageList: [...tempFileList],
        utilities: [...chosenUltilities],
        extra_info: values.extra_info,
        motel_name: values.motelName,
        motel_address: [...locationValue],
        self_governance: isSelfGovernance,
        // strictTime: values.strictTime,
        // StrictTimeStart: values.StrictTimeStart,
        // StrictTimeEnd: values.StrictTimeEnd,
      }),
    }
    sendRequest(path, myInit)
      .then(result => {
        if (result.error == null) {
          window.alert("New Post created Successfully");
        } else {
          window.alert("Error:" + result.error);
        }
      }
      );;
  };
  return (
    <Form
      {...formItemLayout}
      //   form={form}
      name="post"
      onFinish={onFinish}
    >
      <h1>Thông tin của phòng:</h1>
      <Form.Item
        name="motelName"
        label={"Tên nhà trọ:"}
        rules={[
          {
            required: true,
            message: "Hãy nhập tên nhà trọ!",
          },
        ]}
      >
        <Input />
      </Form.Item>
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
        name="motelType"
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
        name="roomAvailable"
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
        name="maxSlotPerRoom"
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
        name="roomGender"
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
        />
      </Form.Item>
      <Form.Item
        name="roomArea"
        label="Diện tích phòng"
        rules={[
          {
            required: true,
            message: "Hãy nhập diện tích",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="rentalCost"
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
      <Form.Item name="depositCost" label="Giá tiền đặt cọc">
        <Input />
      </Form.Item>
      <Form.Item
        name="electricCost"
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
        name="waterCost"
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
        name="internetCost"
        label="Giá internet/truyền hình cáp"
        rules={[
          {
            message: "Hãy nhập giá internet/truyền hình cáp!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="cleanCost" label="Giá vệ sinh">
        <Input />
      </Form.Item>
      <Form.Item
        name="motelAddress"
        label="Địa chỉ"
        rules={[
          {
            type: "array",
          },
        ]}
      >
        <LocationPicker setChosenLocation={setChosenLocation} />
        {/* <Button onClick={() => console.log(chosenLocation)}>Test</Button> */}
        {chosenLocation ? null : <p style={{ color: 'red' }}>Hãy chọn địa chỉ</p>}
      </Form.Item>
      <Form.Item
        name="postGallery"
        label="Hình ảnh"
      >
        <p>{fileList.length} ảnh đã được tải lên</p>
        <Button type="primary" onClick={showModal}>
          Tải ảnh lên
        </Button>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <UploadImage fileList={fileList} setFileList={setFileList} />
        </Modal>
        {fileList.length < 4 ? <p style={{ color: 'red' }}>Hãy Upload ít nhất 4 ảnh</p> : null}
      </Form.Item>
      <Form.Item name="utilities" label="Tiện ích">
        <Checkbox.Group options={utilities} onChange={updateUltilities} />
      </Form.Item>
      <h1>Thông tin bài đăng:</h1>
      <Form.Item
        name="contactName"
        label="Người liên hệ"
        rules={[
          {

            required: true,
            message: 'Hãy nhập người liên hệ!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="contactNumbers"
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
        name="postTitle"
        label="Tiêu đề bài đăng"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="extraInfo"
        label="Nội dung mô tả"
      >
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item

        {...tailFormItemLayout}
      >
        <Checkbox onChange={updateSelfGorvernance}>
          Trọ tự quản
        </Checkbox>
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
        <Checkbox>
          Tôi đã đọc kỹ thông tin
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" disabled={fileList.length < 4}>
          Đăng bài
        </Button>
      </Form.Item>
    </Form >
  );
}

export default Post;
