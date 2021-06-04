import { Form, Input, Button, Checkbox } from "antd";
import React from "react";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 12 },
};

interface Props {
  onClick: () => void;
  buttonType: "button" | "submit";
  buttonLabel: string;
}

export const RegisterForm: React.FC<Props> = ({
  onClick,
  buttonLabel,
  buttonType,
}) => {
  const onFinish = () => {};
  const onFinishFailed = () => {};
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

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
          onClick={onClick}
          type="primary"
          htmlType={buttonType}
          className="login-form-button"
        >
          {buttonLabel}
        </Button>
      </Form.Item>
    </Form>
  );
};
