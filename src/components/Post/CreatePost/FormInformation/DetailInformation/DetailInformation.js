import React from "react";
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
  return (
    <div className="container-create-post">
      <Form {...props.formItemLayout}>
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
        <Form.Item name="deposit" label="Giá tiền đặt cọc(đơn vị:VNĐ)">
          <Input
            value={props.deposit}
            defaultValue={props.deposit}
            onChange={(e) => props.setDeposit(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Giá điện (đơn vị nghìn VNĐ/số)">
          <Input
            value={props.electricPrice}
            defaultValue={props.electricPrice}
            onChange={(e) => props.setElectricPrice(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Giá nước">
          <Input
            placeholder="Vui lòng ghi rõ đơn vị"
            value={props.waterPrice}
            defaultValue={props.waterPrice}
            onChange={(e) => props.setWaterPrice(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Giá internet/truyền hình cáp">
          <Input
            placeholder="Vui lòng ghi rõ đơn vị"
            value={props.internetPrice}
            defaultValue={props.internetPrice}
            onChange={(e) => props.setInternetPrice(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="cleanCost" label="Chi phí vệ sinh">
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
        <Form.Item label="Địa chỉ chi tiết">
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
          <Button
            type="primary"
            onClick={(e) => props.nextBack("post-information")}
          >
            Tiếp theo
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default DetailInformation;
