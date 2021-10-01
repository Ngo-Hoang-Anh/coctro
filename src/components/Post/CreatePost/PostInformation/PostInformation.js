import React from 'react';
import { Form, Input, Button, Radio, Checkbox } from "antd";

const { TextArea } = Input;

function PostInformation(props) {
    return (
        <div className="container-post-information">
            <Form
        {...props.formItemLayout}
        //   form={form}
        name="post"
        onFinish={props.onFinish}
      >
        <h1>Thông tin bài đăng:</h1>
        <Form.Item
          name="phone"
          label="Số điện thoại"
          rules={[
            {
              required: true,
              message: "Hãy nhập số điện thoại!",
            },
          ]}
        >
          <Input value={props.phone} defaultValue={props.phone} onChange={props.onChangePhone}/>
        </Form.Item>
        <Form.Item name="caption" label="Tiêu đề bài đăng">
          <Input value={props.caption} defaultValue={props.caption} onChange={props.onChangeCaption}/>
        </Form.Item>
        <Form.Item name="description" label="Nội dung mô tả">
          <TextArea rows={4} value={props.description} defaultValue={props.description} onChange={props.onChangeDescription}/>
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
            options={props.valueStrictTime}
            onChange={props.onChangeStrictTime}
            value={props.strictTime}
            defaultValue={props.strictTime}
          />
        </Form.Item>
        {props.strictTime === "Có" && (
          <>
            <Form.Item name="StrictTimeStart" label="Thời gian bắt đầu">
              <Input value={props.strictTimeStart} defaultValue={props.strictTimeStart} onChange={props.onChangeStrictTimeStart}/>
            </Form.Item>
            <Form.Item name="StrictTimeEnd" label="Thời gian kết thúc">
              <Input value={props.strictTimeEnd} defaultValue={props.strictTimeEnd} onChange={props.onChangeStrictTimeEnd}/>
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
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
          {...props.tailFormItemLayout}
        >
          <Checkbox value={props.checkboxConfirm} defaultValue={props.checkboxConfirm} onChange={props.onCheckCheckboxConfirm}>
          Tôi đã đọc kỹ thông tin
        </Checkbox>
        Đề xuất bấm vào đăng bài thì sẽ cho xem preview trước, rồi bấm oke thì
          mới đăng. thay vì bấm checkbox này
        </Form.Item>
        <Form.Item {...props.tailFormItemLayout}>
          <Button type="primary" onClick={(e) => props.nextBack('detail-information')}>
            Quay lại
          </Button>
          <Button type="primary" htmlType="submit">
            Đăng bài
          </Button>
          
        </Form.Item>
      </Form>
        </div>
    );
}

export default PostInformation;