import React, { useEffect } from "react";
import { Form, Input, Checkbox, Button, Slider } from "antd";
import "../CommonInformation.css";

const UploadImage = React.lazy(() => import("../../UploadImage"));
const LocationPicker = React.lazy(() =>
  import("../../../../commons/LocationPicker/LocationPicker")
);

function DetailInformation(props) {
  const roomType = props.roomType;
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
  const [form] = Form.useForm();
  const loadData = () => {
    form.setFieldsValue({
      deposit: props.deposit,
      electricity: props.electricPrice,
      water: props.waterPrice,
      internet: props.internetPrice,
      clean: props.cleanPrice,
      detailAddress: props.detailAddress,
    });
  };
  const onFinish = () => {
    if (props.fileList.length !== 0) {
      props.nextBack("post-information");
    } else {
      window.alert("Hãy upload ít nhất 1 ảnh");
    }
  };
  useEffect(loadData, []);
  return (
    <div className="container-create-post">
      <Form form={form} {...props.formItemLayout} onFinish={() => onFinish()}>
        <span id="span-title">Thông tin chi tiết:</span>
        <br />
        <br />
        <br />
        <Form.Item label={"Giá cho thuê(đơn vị: triệu đồng)" + unitPrice + ":"}>
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
            defaultValue={props.rentPrice}
            onChange={(value) => {
              props.setRentPrice(value);
            }}
          />
        </Form.Item>
        <Form.Item
          name="deposit"
          label="Giá tiền đặt cọc(đơn vị:VNĐ)"
          rules={[
            {
              required: true,
              pattern: /^[1-9][0-9]*$/,
              message: "Hãy nhập giá cọc hợp lệ",
            },
          ]}
        >
          <Input
            value={props.deposit}
            defaultValue={props.deposit}
            onChange={(e) => props.setDeposit(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Giá điện (đơn vị nghìn VNĐ/số)"
          name="electricity"
          rules={[
            {
              required: true,
              pattern: /^[1-9][0-9]*$/,
              message: "Hãy nhập giá điện hợp lệ",
            },
          ]}
        >
          <Input
            value={props.electricPrice}
            defaultValue={props.electricPrice}
            onChange={(e) => props.setElectricPrice(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Giá nước"
          name="water"
          rules={[
            {
              required: true,
              message: "Hãy nhập giá nước",
            },
          ]}
        >
          <Input
            placeholder="Vui lòng ghi rõ đơn vị"
            value={props.waterPrice}
            defaultValue={props.waterPrice}
            onChange={(e) => props.setWaterPrice(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Giá internet/truyền hình cáp"
          name="internet"
          rules={[
            {
              required: true,
              message: "Hãy nhập giá internet",
            },
          ]}
        >
          <Input
            placeholder="Vui lòng ghi rõ đơn vị"
            value={props.internetPrice}
            defaultValue={props.internetPrice}
            onChange={(e) => props.setInternetPrice(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="clean"
          label="Chi phí vệ sinh"
          rules={[
            {
              required: true,
              message: "Hãy nhập chi phí vệ sinh",
            },
          ]}
        >
          <Input
            placeholder="Vui lòng ghi rõ đơn vị"
            value={props.cleanPrice}
            defaultValue={props.cleanPrice}
            onChange={(e) => props.setCleanPrice(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Địa chỉ">
          <LocationPicker
            chosenLocation={[...props.chosenLocation]}
            setChosenLocation={props.setChosenLocation}
          />
        </Form.Item>
        <Form.Item
          label="Địa chỉ chi tiết"
          name="detailAddress"
          rules={[
            {
              required: true,
              message: "Hãy nhập địa chỉ chi tiết",
            },
          ]}
        >
          <Input
            placeholder="(Đường/số nhà)"
            value={props.detailAddress}
            defaultValue={props.detailAddress}
            onChange={(e) => props.setDetailAddress(e.target.value)}
          />
        </Form.Item>
        <Form.Item {...props.tailFormItemLayout}>
          <UploadImage
            fileList={[...props.fileList]}
            setFileList={props.setFileList}
          />
          <p>
            *Đăng nhiều hình ảnh sẽ giúp bài đăng hấp dẫn hơn với người tìm trọ*
          </p>
        </Form.Item>
        <Form.Item label="Tiện ích">
          <Checkbox.Group
            className="checkbox-utilities"
            id="checkbox-utilities"
            options={props.utilities}
            onChange={(checkedValue) => props.setChosenUtilities(checkedValue)}
            defaultValue={[...props.chosenUtilities]}
          />
        </Form.Item>
        <br />
        <div id="button">
          <Button
            type="primary"
            id="button-back"
            onClick={(e) => props.nextBack("common-information")}
          >
            Quay lại
          </Button>
          <Button htmlType="submit" type="primary">
            Tiếp theo
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default DetailInformation;
