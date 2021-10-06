import React, { useEffect, useState } from "react";
import {
  Form,
  Radio,
  InputNumber,
  Button,
  Input,
  Modal,
  Checkbox,
  Slider,
} from "antd";
import { sendRequest } from "../../../common/utility";
import { useParams } from "react-router-dom";
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
  const valuePostType = ["Tìm ở ghép", "Cho thuê trọ"];
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
  const [rentPrice, setRentPrice] = useState([0.5, 2]);
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
  const [detailAddress, setDetailAddress] = useState("");
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
  const [phone, setPhone] = useState("");
  //Phone - End
  //Contact-start
  const [contact, setContact] = useState("");
  //contact-end
  //Title - Start
  const [title, setTitle] = useState("");
  //Title - End

  //Description - Start
  const [description, setDescription] = useState("");
  //Description - End

  //Strict Time - Start
  const [strictTime, setStrictTime] = useState("Không");
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
  //onload-start
  let { id } = useParams();
  const [form] = Form.useForm();
  const onload = () => {
    const path = "/post-manager/" + id;
    let token = window.localStorage.getItem("token").toString();
    const myInit = {
      method: "GET",
      headers: {
        Authorization: token,
      },
    };
    sendRequest(path, myInit).then((result) => {
      if (result.error == null) {
        form.setFieldsValue({
          phone: result.contact.contact_numbers[0],
          postType: result.post_type,
          roomType: result.motel_type,
          roomName: result.motel_name,
          area: result.room_area,
          strictTime: result.strictTime,
          strictTimeEnd: result.StrictTimeEnd,
          strictTimeStart: result.StrictTimeStart,
          numberRoomAvailable: result.room_available,
          numberPeoplePerRoom: result.max_slot_per_room,
          gender: result.room_gender,
          utilities: result.utilities,
          deposit: result.room_cost.deposit_cost,
          internetPrice: result.room_cost.internet_cost,
          electricPrice: result.room_cost.electricity_cost,
          rentPrice: result.room_cost.rental_cost,
          cleanPrice: result.room_cost.clean_cost,
          waterPrice: result.room_cost.water_cost,
          detailAddress: result.detailAddress,
          contact: result.contact.contact_name[0],
          description: result.extra_info,
          title: result.post_title,
        });
        setChosenLocation([...result.motel_address]);
        if (result.strictTime === "Có") {
          setStrictTime(result.strictTime);
        }
      } else {
        window.alert("Error:" + result.error);
      }
    });
  };
  useEffect(() => {
    onload();
  }, []);
  // //onload-end
  const onSubmit = () => {
    console.log(form.getFieldsValue());
    //send request here
  };

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

  return (
    <div className="container">
      <div className="container-update-post">
        <Form form={form} {...formItemLayout} onFinish={() => onSubmit()}>
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
            <Input onChange={(e) => setRoomName(e.target.value)} />
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
              onChange={(value) => setNumberPeoplePerRoom(value)}
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
            <Input onChange={(e) => setArea(e.target.value)} />
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
            />
          </Form.Item>

          <br />
          <div id="button"></div>
          <span id="span-title">Thông tin chi tiết:</span>
          <br />
          <br />
          <br />
          <Form.Item name="rentPrice" label={"Giá cho thuê" + unitPrice + ":"}>
            <Slider
              step={0.1}
              range
              min={0.1}
              max={5}
              marks={{
                0: "0",
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
              }}
              tooltipVisible={true}
              onChange={(value) => {
                setRentPrice(value);
              }}
            />
          </Form.Item>
          <Form.Item name="deposit" label="Giá tiền đặt cọc(Đơn vị: VNĐ)">
            <Input onChange={(e) => setDeposit(e.target.value)} />
          </Form.Item>
          <Form.Item
            name="electricPrice"
            label="Giá điện (đơn vị nghìn VND/số)"
          >
            <Input onChange={(e) => setElectricPrice(e.target.value)} />
          </Form.Item>
          <Form.Item name="waterPrice" label="Giá nước">
            <Input
              placeholder="Vui lòng ghi rõ đơn vị"
              onChange={(e) => setWaterPrice(e.target.value)}
            />
          </Form.Item>
          <Form.Item name="internetPrice" label="Giá internet/truyền hình cáp">
            <Input
              placeholder="Vui lòng ghi rõ đơn vị"
              onChange={(e) => setInternetPrice(e.target.value)}
            />
          </Form.Item>
          <Form.Item name="cleanPrice" label="Chi phí vệ sinh">
            <Input
              placeholder="Vui lòng ghi rõ đơn vị"
              onChange={(e) => setCleanPrice(e.target.value)}
            />
          </Form.Item>
          <Form.Item name="address" label="Địa chỉ">
            <LocationPicker
              chosenLocation={[...chosenLocation]}
              setChosenLocation={setChosenLocation}
            />
          </Form.Item>
          <Form.Item name="detailAddress" label="Địa chỉ chi tiết">
            <Input
              placeholder="(Đường/số nhà)"
              onChange={(e) => setDetailAddress(e.target.value)}
            />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <p>{fileList.length} ảnh đã tải lên</p>
            <UploadImage fileList={[...fileList]} setFileList={setFileList} />
            <p>
              *Đăng nhiều hình ảnh sẽ giúp bài đăng hấp dẫn hơn với người tìm
              trọ*
            </p>
          </Form.Item>
          <Form.Item name="utilities" label="Tiện ích">
            <Checkbox.Group
              className="checkbox-utilities"
              options={utilities}
              onChange={(checkedValue) => setChosenUtilities(checkedValue)}
            />
          </Form.Item>
          <span id="span-title">Thông tin bài đăng:</span>
          <br />
          <br />
          <br />
          <Form.Item name="contact" label="Người liên hệ">
            <Input onChange={(e) => setContact(e.target.value)} />
          </Form.Item>
          <Form.Item name="phone" label="Số điện thoại">
            <Input onChange={(e) => setPhone(e.target.value)} />
          </Form.Item>
          <Form.Item name="title" label="Tiêu đề bài đăng">
            <Input onChange={(e) => setTitle(e.target.value)} />
          </Form.Item>
          <Form.Item name="description" label="Nội dung mô tả">
            <TextArea
              placeholder="Phòng trọ của bạn có điểm gì nổi bật so với các phòng trọ khác?
             Có chi phí nào chưa được đề cập không?"
              rows={4}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Item>
          <Form.Item name="strictTime" label="Giờ giới nghiêm">
            <Radio.Group
              options={valueStrictTime}
              onChange={(e) => setStrictTime(e.target.value)}
            />
          </Form.Item>
          {strictTime === "Có" && (
            <>
              <Form.Item name="strictTimeStart" label="Thời gian bắt đầu">
                <Input onChange={(e) => setStrictTimeStart(e.target.value)} />
              </Form.Item>
              <Form.Item name="strictTimeEnd" label="Thời gian kết thúc">
                <Input onChange={(e) => setStrictTimeEnd(e.target.value)} />
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
            <Button htmlType="submit" type="primary">
              Cập nhật
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default UpdatePost;
