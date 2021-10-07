import React, { useEffect, useState } from "react";
import {
  Form,
  Radio,
  InputNumber,
  Button,
  Input,
  Checkbox,
  Slider,
  Modal,
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
  const [notifyMessage, setNotifyMessage] = useState("");
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
  //Post Type
  const valuePostType = ["Tìm ở ghép", "Cho thuê trọ"];
  //Room Type
  const [roomType, setRoomType] = useState("");
  const valueRoomType = [
    "Ký túc xá",
    "Phòng trọ cho thuê",
    "Nhà nguyên căn",
    "Chung cư mini",
  ];
  //Gender
  const valueGender = ["Tất cả", "Nam", "Nữ"];
  //address
  const [chosenLocation, setChosenLocation] = useState([]);
  //utilities
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
  //Strict Time
  const [strictTime, setStrictTime] = useState("Không");
  const valueStrictTime = ["Có", "Không"];
  //image
  const [fileList, setFileList] = useState([]);
  //onload
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
          strictTime: result.strict_time,
          strictTimeEnd: result.strict_time_end,
          strictTimeStart: result.strict_time_start,
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
          detailAddress: result.detail_address,
          contact: result.contact.contact_name[0],
          description: result.extra_info,
          title: result.post_title,
          address: result.motel_address,
        });
        setFileList([...result.post_gallery]);
        setChosenLocation([...result.motel_address]);
        setRoomType(result.motel_type);
        if (result.strictTime === "Có") {
          setStrictTime(result.strict_time);
        }
      } else {
        setNotifyMessage("Error:" + result.error);
      }
    });
  };
  useEffect(() => {
    onload();
  }, []);
  // //onload-end
  const onSubmit = () => {
    console.log(form.getFieldsValue());
    console.log(chosenLocation);
    console.log(fileList);
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
            <Radio.Group options={valuePostType} />
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
            <Input />
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
            <InputNumber min={0} />
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
            <InputNumber min={1} />
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
            <Input />
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
            <Radio.Group options={valueGender} />
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
            />
          </Form.Item>
          <Form.Item name="deposit" label="Giá tiền đặt cọc(Đơn vị: VNĐ)">
            <Input />
          </Form.Item>
          <Form.Item
            name="electricPrice"
            label="Giá điện (đơn vị nghìn VND/số)"
          >
            <Input />
          </Form.Item>
          <Form.Item name="waterPrice" label="Giá nước">
            <Input placeholder="Vui lòng ghi rõ đơn vị" />
          </Form.Item>
          <Form.Item name="internetPrice" label="Giá internet/truyền hình cáp">
            <Input placeholder="Vui lòng ghi rõ đơn vị" />
          </Form.Item>
          <Form.Item name="cleanPrice" label="Chi phí vệ sinh">
            <Input placeholder="Vui lòng ghi rõ đơn vị" />
          </Form.Item>
          {/* <LocationPicker
            chosenLocation={[...chosenLocation]}
            setChosenLocation={setChosenLocation}
          /> */}
          <Form.Item name="address" label="Địa chỉ">
            <LocationPicker
              chosenLocation={[...chosenLocation]}
              setChosenLocation={setChosenLocation}
            />
          </Form.Item>
          <Form.Item name="detailAddress" label="Địa chỉ chi tiết">
            <Input placeholder="(Đường/số nhà)" />
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
            />
          </Form.Item>
          <span id="span-title">Thông tin bài đăng:</span>
          <br />
          <br />
          <br />
          <Form.Item name="contact" label="Người liên hệ">
            <Input />
          </Form.Item>
          <Form.Item name="phone" label="Số điện thoại">
            <Input />
          </Form.Item>
          <Form.Item name="title" label="Tiêu đề bài đăng">
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Nội dung mô tả">
            <TextArea
              placeholder="Phòng trọ của bạn có điểm gì nổi bật so với các phòng trọ khác?
             Có chi phí nào chưa được đề cập không?"
              rows={4}
            />
          </Form.Item>
          <Form.Item name="strictTime" label="Giờ giới nghiêm">
            <Radio.Group options={valueStrictTime} />
          </Form.Item>
          {strictTime === "Có" && (
            <>
              <Form.Item name="strictTimeStart" label="Thời gian bắt đầu">
                <Input />
              </Form.Item>
              <Form.Item name="strictTimeEnd" label="Thời gian kết thúc">
                <Input />
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
      <Modal
        visible={notifyMessage !== ""}
        title={notifyMessage}
        footer={[
          <Button type="default" onClick={() => setNotifyMessage("")}>
            Close
          </Button>,
        ]}
      >
        <h1>{notifyMessage}</h1>
      </Modal>
    </div>
  );
}

export default UpdatePost;
