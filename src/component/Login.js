import { Form, Input, Button, Select } from 'antd';

import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';
const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
};


const LoginPage = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {//call api here
        console.log(values);
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.get(`https://zip9ffa7ll.execute-api.ap-southeast-1.amazonaws.com/Stage/hello`)
        .then(res => {
          console.log("Res:"+res);
        })
    };

    return (
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
            <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                <Input prefix={<UserOutlined />} placeholder="Tên đăng nhập" />
            </Form.Item>
            <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                <Input prefix={<LockOutlined />} placeholder="Mật khẩu" type="password" />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}
export default LoginPage;