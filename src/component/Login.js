import { Form, Input, Button, Result } from 'antd';

import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { URLpath, sendRequest } from '../common/utility';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
};
const LoginPage = () => {
    const [form] = Form.useForm();
    const onLogin = (values) => {//call api here
        console.log(values);
        const testURL = URLpath + '/login';
        const myInit = {
            method: 'POST',
            body: JSON.stringify({
                email: values.email,
                password: values.password,
            }),
        }
        sendRequest(testURL, myInit)
            .then(result => {
                console.log("result:");
                console.log(result);
            }
            );;

    }

    return (
        <Form {...layout} form={form} name="control-hooks" onFinish={onLogin}>
            <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                <Input prefix={<UserOutlined />} placeholder="Tên đăng nhập" />
            </Form.Item>
            <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                <Input prefix={<LockOutlined />} placeholder="Mật khẩu" type="password" />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Login
                </Button>
            </Form.Item>
        </Form>
    );
}


export default LoginPage;