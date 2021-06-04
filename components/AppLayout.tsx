import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { UserOutlined } from "@ant-design/icons";

const routes = [
  { key: "/", label: "Home", icon: <UserOutlined /> },
  { key: "/register", label: "Register", icon: <UserOutlined /> },

  { key: "/sign-in", label: "Sign In", icon: <UserOutlined /> },
];

const AppLayout: React.FC = ({ children }) => {
  const { Sider, Content, Footer } = Layout;

  const { pathname } = useRouter();

  return (
    <Layout hasSider>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" selectedKeys={[pathname]}>
          {routes.map(({ key, icon, label }) => (
            <Menu.Item key={key} icon={icon}>
              <Link href={key}>
                <a>{label}</a>
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Content>{children}</Content>
        <Footer>&copy;2021 by Adam Turner, for Imperial College London</Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
