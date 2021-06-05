import { Form, Input, Button, Checkbox, Layout } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { AppLayout } from "../components";
import Link from "next/link";
import { Auth } from "aws-amplify";
import { useAuth } from "../hooks";

const layout = {
  wrapperCol: { offset: 6, span: 12 },
};

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const onFinish = async (values: { email: string; password: string }) => {
    const { email, password } = values;
    await signIn(email, password);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <AppLayout>
      <Layout style={{ justifyContent: "center" }}>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or{" "}
            <Link href="/register">
              <a>register now!</a>
            </Link>
          </Form.Item>
        </Form>
      </Layout>
    </AppLayout>
  );
};

export default SignIn;
