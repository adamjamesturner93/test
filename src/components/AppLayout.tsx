import "antd/dist/antd.css";
import { useState } from "react";

import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { Layout, Menu, Button } from "antd";
import { useAuth } from "../hooks";

const AUTH_ROUTES = [{ key: "/", label: "Home", icon: <UserOutlined /> }];
const UNAUTH_ROUTES = [
  { key: "/", label: "Home", icon: <UserOutlined /> },
  { key: "/register", label: "Register", icon: <UserOutlined /> },
  { key: "/sign-in", label: "Sign In", icon: <UserOutlined /> },
];

const AppLayout: React.FC = ({ children }) => {
  const { Sider, Content, Footer } = Layout;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { user, signOut } = useAuth();

  const { pathname } = useRouter();

  const routes = user ? AUTH_ROUTES : UNAUTH_ROUTES;

  return (
    <Layout hasSider>
      <Sider
        collapsible
        collapsed={isCollapsed}
        onCollapse={setIsCollapsed}
        breakpoint="lg"
        onBreakpoint={(broken) => {
          console.log(broken);
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
          {user && (
            <Menu.Item onClick={signOut} key="/sign-out">
              <Link href="/">
                <a>Signout</a>
              </Link>
            </Menu.Item>
          )}
        </Menu>
      </Sider>
      <Layout>
        {user ? <h2>{user.username}</h2> : <h2>Not registered</h2>}
        <Content>{children}</Content>
        <Footer style={{ textAlign: "center" }}>
          &copy;2021 by Adam Turner, for Imperial College London
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
