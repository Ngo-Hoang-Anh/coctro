import React, { useState } from "react";
import { Form, Input, Checkbox, Button, Modal } from "antd";
import "../CommonInformation.css";

const UploadImage = React.lazy(() => import('../../UploadImage'));
const LocationPicker = React.lazy(() => import('../../../../commons/LocationPicker/LocationPicker'));

function DetailInformation(props) {

  const [isModalVisible, setIsModalVisible] = useState(false);

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
        <span id="span-title">Thông tin chi tiết:</span><br/><br/><br/>
        <Form.Item
          label={"Giá cho thuê" + unitPrice + ":"}
        >
          <Input value={props.rentPrice} defaultValue={props.rentPrice} onChange={(e) => props.setRentPrice(e.target.value)} />
        </Form.Item>
        <Form.Item name="deposit" label="Giá tiền đặt cọc">
          <Input value={props.deposit} defaultValue={props.deposit} onChange={(e) => props.setDeposit(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Giá điện (đơn vị nghìn VND/số)"
        >
          <Input value={props.electricPrice} defaultValue={props.electricPrice}
            onChange={(e) => props.setElectricPrice(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Giá nước"
        >
          <Input value={props.waterPrice} defaultValue={props.waterPrice}
            onChange={(e) => props.setWaterPrice(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Giá internet/truyền hình cáp"
        >
          <Input value={props.internetPrice} defaultValue={props.internetPrice}
            onChange={(e) => props.setInternetPrice(e.target.value)} />
        </Form.Item>
        <Form.Item name="cleanCost" label="Giá chi phí khác">
          <Input value={props.cleanPrice} defaultValue={props.cleanPrice}
            onChange={(e) => props.setCleanPrice(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Địa chỉ"
        >
          <LocationPicker chosenLocation={[...props.chosenLocation]} setChosenLocation={props.setChosenLocation} />
        </Form.Item>
        <Form.Item  {...props.tailFormItemLayout}>
          <p>{props.fileList.length} ảnh đã tải lên</p>
          <Button type="primary" onClick={() => setIsModalVisible(true)}>
            Tải ảnh lên
          </Button>
          <Modal title="Basic Modal"
            visible={isModalVisible}
            onOk={() => setIsModalVisible(false)}
            onCancel={() => setIsModalVisible(false)}>
            <UploadImage fileList={[...props.fileList]} setFileList={props.setFileList} />
          </Modal>
        </Form.Item>
        <Form.Item label="Tiện ích">
          <Checkbox.Group
          id="checkbox-utilities"
            options={props.utilities}
            onChange={(checkedValue) => props.setChosenUtilities(checkedValue)}
            defaultValue={[...props.chosenUtilities]}
          />
        </Form.Item>
        <br/>
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
