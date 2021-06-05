import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { useAuth } from "../hooks";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 12 },
};

interface Props {
  callback: () => void;
}

export const RegisterForm: React.FC<Props> = ({ callback }) => {
  const { signUp, signUpConfirm, signIn } = useAuth();
  const [passwd, setPasswd] = useState<string>();

  const checkEmail = async (email: string, password: string) => {
    await signUp(email, password);
    console.log(email, password);
  };

  const onFinishFailed = () => {};
  const onFinish = async (event: {
    confirmPassword: string;
    password: string;
    over18: boolean;
    email: string;
    confirmCode: string;
  }) => {
    if (!passwd) {
      const { email, password, confirmPassword } = event;
      if (password !== confirmPassword) throw new Error("Passwords must match");

      await checkEmail(email, password);
      setPasswd(password);
      return;
    }

    const { email, confirmCode } = event;
    console.log(email, passwd, confirmCode);
    await signUpConfirm(email, passwd, confirmCode);
    await signIn(email, passwd);
    callback();
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email Address"
        name="email"
        rules={[
          { required: true, message: "Please input your email address!" },
        ]}
      >
        <Input disabled={!!passwd} />
      </Form.Item>

      {!passwd ? (
        <React.Fragment>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="over18" valuePropName="checked">
            <Checkbox>Over 18</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Check email
            </Button>
          </Form.Item>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Form.Item {...tailLayout}>
            <p>A confirmation code code has been sent to the email address</p>
          </Form.Item>

          <Form.Item
            label="Confirmation Code"
            name="confirmCode"
            rules={[
              {
                required: !!passwd,
                message: "Please input the confirm code sent!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Next
            </Button>
          </Form.Item>
        </React.Fragment>
      )}
    </Form>
  );
};
