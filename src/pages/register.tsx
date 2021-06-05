import { Layout, Steps } from "antd";
import { AppLayout, RegisterForm } from "../components";

import {
  UserOutlined,
  SolutionOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const { Step } = Steps;
const tailLayout = {
  wrapperCol: { offset: 6, span: 12 },
};

const Register: React.FC = () => {
  const [pageIndex, setPageIndex] = useState(0);
  let formContent: React.ReactNode;
  switch (pageIndex) {
    case 0:
      formContent = (
        <RegisterForm callback={() => setPageIndex((index) => index + 1)} />
      );
      break;
    case 1:
      formContent = <h2>Next form {pageIndex} </h2>;
      break;
    case 2:
      formContent = <h2>Next form {pageIndex} </h2>;
      break;
    case 3:
      formContent = <h2>Next form {pageIndex} </h2>;
      break;
  }

  return (
    <AppLayout>
      <Layout>
        <Layout style={{ justifyContent: "center" }}>{formContent}</Layout>
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
