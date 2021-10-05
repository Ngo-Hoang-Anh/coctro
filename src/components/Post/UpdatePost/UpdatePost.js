import React, { useState } from "react";
import { Form, Radio, InputNumber, Button, Input, Modal, Checkbox } from "antd";
import "./UpdatePost.css";
const LocationPicker = React.lazy(() =>
  import("../../../components/commons/LocationPicker/LocationPicker")
);
const UploadImage = React.lazy(() => import("../CreatePost/UploadImage"));

const { TextArea } = Input;

function UpdatePost(props) {
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
  const valuePostType = ["Tìm ở ghép", "Cho thuê trọ", "Tìm trọ"];
  //Post Type - End
  //Room Type - Start
  const [roomType, setRoomType] = useState("");
  const valueRoomType = [
    "Ký túc xá",
    "Phòng trọ cho thuê",
    "Nhà nguyên căn",
    "Chung cư mini",
  ];
  //Room Type - End
  //Number Room Name - Start
  const [roomName, setRoomName] = useState("");
  //Number Room Name - End
  //Number Room Available - Start
  const [numberRoomAvailable, setNumberRoomAvailable] = useState(3);
  //Number Room Available - End
  //Number Person Per Room - Start
  const [numberPeoplePerRoom, setNumberPeoplePerRoom] = useState(2);
  //Number Person Per Room - End
  //Gender - Start
  const [gender, setGender] = useState("");
  const valueGender = ["Tất cả", "Nam", "Nữ"];
  //Gender - End
  //Address -Start
  //Rent Price - Start
  const [rentPrice, setRentPrice] = useState("");
  //Rent Price - End
  //Deposit - Start
  const [deposit, setDeposit] = useState("");
  //Deposit - End
  //Electric Price - Start
  const [electricPrice, setElectricPrice] = useState("");
  //Electric Price - End
  //Water Price - Start
  const [waterPrice, setWaterPrice] = useState("");
  //Water Price - End
  //Internet Price - Start
  const [internetPrice, setInternetPrice] = useState("");
  //Internet Price - End
  //clean Price - Start
  const [cleanPrice, setCleanPrice] = useState("");
  //clean Price - End
  const [chosenLocation, setChosenLocation] = useState([]);
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
    { label: "Ban công", value: "Ban công" },
  ];
  const [chosenUtilities, setChosenUtilities] = useState([]);
  //Utilities - End
  //Phone - Start
  const [phone, setPhone] = useState();
  //Phone - End
  //Contact-start
  const [contact, setContact] = useState();
  //contact-end
  //Title - Start
  const [title, setTitle] = useState("");
  //Title - End

  //Description - Start
  const [description, setDescription] = useState("");
  //Description - End

  //Strict Time - Start
  const [isSelfGovernance, setSelfGovernance] = useState(false);
  const [strictTime, setStrictTime] = useState("");
  const [strictTimeStart, setStrictTimeStart] = useState("");
  const [strictTimeEnd, setStrictTimeEnd] = useState("");

  const valueStrictTime = ["Có", "Không"];
  //Strict Time - End

  //image -start
  const [fileList, setFileList] = useState([]);
  //image -end
  //room area - start
  const [area, setArea] = useState(0);
  //room area -end


  const [isModalVisible, setIsModalVisible] = useState(false);
  let unitPrice = "VNĐ/người";
  if (roomType === "Ký túc xá") {
    unitPrice = "(đơn vị:VND/người)";
  } else if (roomType === "Phòng trọ cho thuê") {
    unitPrice = "(đơn vị: VND/phòng)";
  } else if (roomType === "Nhà nguyên căn" || roomType === "Chung cư mini") {
    unitPrice = "(đơn vị: VND/căn)";
  } else {
    unitPrice = "";
  }


  return (<div className="container">
    <div className="container-update-post">
      <Form {...formItemLayout}>
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
            options={valuePostType}
            onChange={(e) => setPostType(e.target.value)}
            value={postType}
            defaultValue={postType}
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
            options={valueRoomType}
            onChange={(e) => setRoomType(e.target.value)}
            value={roomType}
            defaultValue={roomType}
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
            value={roomName}
            defaultValue={roomName}
            onChange={(e) => setRoomName(e.target.value)}
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
            value={numberRoomAvailable}
            defaultValue={numberRoomAvailable}
            onChange={(value) => setNumberRoomAvailable(value)}
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
            value={numberPeoplePerRoom}
            defaultValue={numberPeoplePerRoom}
            onChange={(value) => setNumberPeoplePerRoom(value)}
          />
        </Form.Item>
        <Form.Item
          name="area"
          label="Diện tích (đơn vị: m2):"
          rules={[
            {
              type: "number",
              required: true,
              message: "Hãy nhập diện tích phòng",
            },
          ]}
        >
          <Input
            value={area}
            defaultValue={area}
            onChange={(e) => setArea(e.target.value)}
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
            onChange={(e) => setGender(e.target.value)}
            value={gender}
            defaultValue={gender}
          />
        </Form.Item>

        <br />
        <div id="button"></div>
        <span id="span-title">Thông tin chi tiết:</span>
        <br />
        <br />
        <br />
        <Form.Item label={"Giá cho thuê" + unitPrice + ":"}>
          <Input
            value={rentPrice}
            defaultValue={rentPrice}
            onChange={(e) => setRentPrice(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="deposit" label="Giá tiền đặt cọc">
          <Input
            value={deposit}
            defaultValue={deposit}
            onChange={(e) => setDeposit(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Giá điện (đơn vị nghìn VND/số)">
          <Input
            value={electricPrice}
            defaultValue={electricPrice}
            onChange={(e) => setElectricPrice(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Giá nước">
          <Input
            value={waterPrice}
            defaultValue={waterPrice}
            onChange={(e) => setWaterPrice(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Giá internet/truyền hình cáp">
          <Input
            value={internetPrice}
            defaultValue={internetPrice}
            onChange={(e) => setInternetPrice(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="cleanCost" label="Giá chi phí khác">
          <Input
            value={cleanPrice}
            defaultValue={cleanPrice}
            onChange={(e) => setCleanPrice(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Địa chỉ">
          <LocationPicker
            chosenLocation={[...chosenLocation]}
            setChosenLocation={setChosenLocation}
          />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <p>{fileList.length} ảnh đã tải lên</p>
          <Button type="primary" onClick={() => setIsModalVisible(true)}>
            Tải ảnh lên
          </Button>
          <Modal
            title="Basic Modal"
            visible={isModalVisible}
            onOk={() => setIsModalVisible(false)}
            onCancel={() => setIsModalVisible(false)}
          >
            <UploadImage fileList={[...fileList]} setFileList={setFileList} />
          </Modal>
        </Form.Item>
        <Form.Item label="Tiện ích">
          <Checkbox.Group
            id="checkbox-utilities"
            options={utilities}
            onChange={(checkedValue) => setChosenUtilities(checkedValue)}
            defaultValue={[...chosenUtilities]}
          />
        </Form.Item>
        <span id="span-title">Thông tin bài đăng:</span>
        <br />
        <br />
        <br />
        <Form.Item name="contact" label="Người liên hệ">
          <Input
            value={contact}
            defaultValue={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="phone" label="Số điện thoại">
          <Input
            value={phone}
            defaultValue={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="title" label="Tiêu đề bài đăng">
          <Input
            value={title}
            defaultValue={title || roomName}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="description" label="Nội dung mô tả">
          <TextArea
            rows={4}
            value={description}
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Item>

        {!isSelfGovernance && (
          <Form.Item name="strictTime" label="Giờ giới nghiêm">
            <Radio.Group
              options={valueStrictTime}
              onChange={(e) => setStrictTime(e.target.value)}
              value={strictTime}
              defaultValue={strictTime}
            />
          </Form.Item>
        )}
        {!isSelfGovernance && strictTime === "Có" && (
          <>
            <Form.Item name="StrictTimeStart" label="Thời gian bắt đầu">
              <Input
                value={strictTimeStart}
                defaultValue={strictTimeStart}
                onChange={(e) => setStrictTimeStart(e.target.value)}
              />
            </Form.Item>
            <Form.Item name="StrictTimeEnd" label="Thời gian kết thúc">
              <Input
                value={strictTimeEnd}
                defaultValue={strictTimeEnd}
                onChange={(e) => setStrictTimeEnd(e.target.value)}
              />
            </Form.Item>
          </>
        )}
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Hãy đọc kĩ lại thông tin")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>Tôi đã đọc kĩ thông tin</Checkbox>
        </Form.Item>
        <br />
        <div id="button">
          <Button type="primary" htmlType="submit">
            Cập nhật
          </Button>
        </div>
      </Form>
    </div>
    </div>);
}

export default UpdatePost;
