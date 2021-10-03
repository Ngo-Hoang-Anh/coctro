import React from "react";
import { Form, Input, Button, Radio, Checkbox } from "antd";
import "../CommonInformation.css";

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
        <span id="span-title">Thông tin bài đăng:</span>
        <br />
        <br />
        <br />
        <Form.Item name="contact" label="Người liên hệ">
          <Input
            value={props.contact}
            defaultValue={props.contact}
            onChange={(e) => props.setContact(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="phone" label="Số điện thoại">
          <Input
            value={props.phone}
            defaultValue={props.phone}
            onChange={(e) => props.setPhone(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="title" label="Tiêu đề bài đăng">
          <Input
            value={props.title}
            defaultValue={props.title || props.roomName}
            onChange={(e) => props.setTitle(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="description" label="Nội dung mô tả">
          <TextArea
            placeholder="Phòng trọ của bạn có điểm gì nổi bật so với các phòng trọ khác?
          Có chi phí nào chưa được đề cập không?"
            rows={4}
            value={props.description}
            defaultValue={props.description}
            onChange={(e) => props.setDescription(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="strictTime" label="Giờ giới nghiêm">
          <Radio.Group
            options={props.valueStrictTime}
            onChange={(e) => props.setStrictTime(e.target.value)}
            value={props.strictTime}
            defaultValue={props.strictTime}
          />
        </Form.Item>

        {props.strictTime === "Có" && (
          <>
            <Form.Item name="StrictTimeStart" label="Thời gian bắt đầu">
              <Input
                value={props.strictTimeStart}
                defaultValue={props.strictTimeStart}
                onChange={(e) => props.setStrictTimeStart(e.target.value)}
              />
            </Form.Item>
            <Form.Item name="StrictTimeEnd" label="Thời gian kết thúc">
              <Input
                value={props.strictTimeEnd}
                defaultValue={props.strictTimeEnd}
                onChange={(e) => props.setStrictTimeEnd(e.target.value)}
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
          {...props.tailFormItemLayout}
        >
          <Checkbox>Tôi đã đọc kĩ thông tin</Checkbox>
        </Form.Item>
        <br />
        <div id="button">
          <Button
            type="primary"
            id="button-back"
            onClick={(e) => props.nextBack("detail-information")}
          >
            Quay lại
          </Button>
          <Button type="primary" htmlType="submit">
            Đăng bài
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default PostInformation;
