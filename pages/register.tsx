import { Form, Input, Button, Checkbox, Row } from "antd";
import { Layout, Steps } from "antd";
import { AppLayout, RegisterForm } from "../components";
import Link from "next/link";
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const { Step } = Steps;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 12 },
};

const Register: React.FC = () => {
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <AppLayout>
      <Layout {...tailLayout} style={{ justifyContent: "center" }}>
        <RegisterForm
          onClick={() => setPageIndex((index) => index + 1)}
          buttonLabel="Next"
          buttonType="button"
        />
        <Steps
          type="navigation"
          {...tailLayout}
          current={pageIndex}
          onChange={setPageIndex}
        >
          <Step status="process" title="Register" icon={<UserOutlined />} />
          <Step
            status="wait"
            title="Personal Details"
            icon={<SolutionOutlined />}
          />
          <Step
            status="wait"
            title="Amputation Details"
            icon={<SmileOutlined />}
          />
          <Step status="wait" title="Complete" icon={<SmileOutlined />} />
        </Steps>
      </Layout>
    </AppLayout>
  );
};

export default Register;
