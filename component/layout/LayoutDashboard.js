import { Outlet, useNavigate } from "react-router-dom";
import "./LayoutDashboard.css";
import logo from "../../asset/logo/logo1.jpg";

import React, { useEffect, useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  DownOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Avatar,
  Badge,
  Space,
  Dropdown,
} from "antd";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Dashboard", "/dashboard", <PieChartOutlined />),
  getItem("Category", "/dashboard/category", <DesktopOutlined />),
  getItem("Employee", "/employee", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
];

const LayoutDashboard = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onselectMenu = (item) => {
    navigate(item.key);
  };
  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    if (isLogin == "0") {
      navigate("/dashboard/login");
    }
  }, []);
  const handleLogout = () => {
    localStorage.setItem("isLogin", "0");
    window.location.href = "/dashboard/login";
  };

  const drobDown = [
    {
      key: "1",
      label: "My Account",
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: "password",
    },
    {
      key: "3",
      label: "Address",
    },
    {
      key: "4",
      label: <a onClick={handleLogout}>Logout</a>,
    },
  ];
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onSelect={onselectMenu}
        />
      </Sider>
      <Layout>
        <Header className="barndContain">
          <div style={{ display: "flex", paddingTop: 2 }}>
            <div>
              <img
                src={logo}
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            </div>
            <div style={{ paddingLeft: 10 }}>
              <div className="txtSubBrandName">NIT Build IT Skill</div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <Dropdown
                menu={{
                  items: drobDown,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Hover me
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
            <div style={{ paddingLeft: 12 }}>
              <Space>
                <Badge count={99}>
                  <Avatar shape="square" size="large" />
                </Badge>
              </Space>
            </div>
          </div>
        </Header>

        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            style={{
              padding: 5,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        ></Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutDashboard;

// import './LayoutDashboard.css'
// import logo from "../../asset/logo/logo1.jpg";
// import { useNavigate,Outlet } from "react-router-dom"; //use for link file to menu

// function LayoutDashboard() {
//   const naVigate = useNavigate();
//   const onClickMenu = (routeName) => {
//     naVigate(routeName);
//   };
//   const onClickToFrontend =()=>{
//     window.location.href="/";
//   }

//   return (
//     <div>
//     <div>
//      <div className="mainHeaderDashboard">
//{
/* <div className="barndContain">
  // <img src={logo} style={{ width: 50, height: 50, marginRight: 10 }} />
  //{" "}
  <div style={{ paddingLeft: 10 }}>
    //{" "}
    <div className="txtBrandName" onClick={() => onClickMenu("/dashboard/")}>
      // NIT Backend //{" "}
    </div>
    // <div className="txtSubBrandName">NIT Build IT Skill</div>
    //{" "}
  </div>
  //{" "}
</div>; */
//}

//         <div className="menuContain">
//           <ul className="menu">
//             <li onClick={() => onClickMenu("/dashboard/")} className="menuItem">
//               Home
//             </li>
//             <li onClick={() => onClickMenu("/dashboard/about")} className="menuItem">
//               About
//             </li>
//             <li onClick={() => onClickMenu("/dashboard/product")} className="menuItem">
//               product
//             </li>
//             <li onClick={() => onClickMenu("/dashboard/category")} className="menuItem">
//               category
//             </li>
//             <li onClick={() => onClickMenu("/dashboard/customer")} className="menuItem">
//               Customer
//             </li>
//             <li onClick={() => onClickMenu("/dashboard/user")} className="menuItem">
//               User
//             </li>
//             <li onClick={() => onClickMenu("/dashboard/order")} className="menuItem">
//               Order
//             </li>
//             <li onClick={() => onClickMenu("/dashboard/report")} className="menuItem">
//               Report
//             </li>
//             <li onClick={() => onClickMenu("/")} className="menuItem">
//               Front End
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//     <Outlet/>
//     </div>
//   );
// }
// export default LayoutDashboard;
