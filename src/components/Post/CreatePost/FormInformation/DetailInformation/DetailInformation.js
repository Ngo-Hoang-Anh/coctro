import React from "react";
import { Form, Input, Cascader, Checkbox, Button } from "antd";
import "../CommonInformation.css";

function DetailInformation(props) {
  return (
    <div className="container-detail-information">
      <Form {...props.formItemLayout}>
        <h1>Thông tin chi tiết:</h1>
        <Form.Item
          name="price"
          label={props.priceUnit}
          rules={[
            {
              required: true,
              message: "Hãy nhập giá cho thuê!",
            },
          ]}
        >
          
          <Input value={props.rentPrice} defaultValue={props.rentPrice} onChange={props.onChangeRentPrice}/>
        </Form.Item>
        <Form.Item name="deposit" label="Giá tiền đặt cọc">
          <Input value={props.deposit} defaultValue={props.deposit} onChange={props.onChangeDeposot}/>
        </Form.Item>
        <Form.Item
          name="electricPrice"
          label="Giá điện (đơn vị nghìn VND/số)"
          rules={[
            {
              message: "Hãy nhập giá điện!",
            },
          ]}
        >
          <Input value={props.electricPrice} defaultValue={props.electricPrice} onChange={props.onChangeElectricPrice}/>
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
          <Input value={props.waterPrice} defaultValue={props.waterPrice} onChange={props.onChangeWaterPrice}/>
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
          <Input value={props.internetPrice} defaultValue={props.internetPrice} onChange={props.onChangeInternetPrice}/>
        </Form.Item>
        <Form.Item name="otherPrice" label="Giá chi phí khác">
          <Input value={props.otherPrice} defaultValue={props.otherPrice} onChange={props.onChangeOtherPrice}/>
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
          <Cascader options={props.residences} /> cần thống nhất với AN làm cái này
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
          <Checkbox.Group
            options={props.utilities}
            onChange={props.onChangeUltilities}
            value={[...props.chosenUltilities]}
            defaultValue={[...props.chosenUltilities]}
          />
          {console.log(props.chosenUltilities + " mamam")}
          {/* tại sao phải có câu lệnh này mới chay. lẽ nào do props.chosenUltilities */}
          Xoa dong nay di nha
        </Form.Item>
        <Form.Item {...props.tailFormItemLayout}>
          <Button
            type="primary"
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
        </Form.Item>
      </Form>
    </div>
  );
}

export default DetailInformation;
