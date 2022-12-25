import React from "react";
import { Layout, Input, Row, Typography, Space, Col } from "antd";
import UserInfo from "../components/UserInfo";
import { useNavigate } from "react-router-dom";
import AddNew from "../components/AddNew";
import ListBoard from "../components/ListBoard";
import ListCard from "../components/ListCard";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;
const { Search } = Input;

const Home: React.FC = () => {
  const navigate = useNavigate();
  const onSearch = (value: string) => console.log(value);
  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#d35400 ",
          }}
        >
          <Row>Logo</Row>
          <Search
            style={{ width: "50%" }}
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
            size="large"
          />
          <Row align={"middle"} style={{ gap: "10px" }}>
            <UserInfo onClick={handleLogout}>user1</UserInfo>
          </Row>
        </Header>
        <Layout>
          <Sider
            style={{ height: "100%", background: "#e67e22", padding: "50px 0" }}
          >
            <Row align={"middle"} justify="space-around">
              <Title level={4} style={{ margin: 0 }}>
                Your boards
              </Title>
              <AddNew></AddNew>
            </Row>
            <ListBoard></ListBoard>
          </Sider>
          <Content
            style={{
              padding: "50px",
              height: "100%",
              overflow: "scroll",
              whiteSpace: "nowrap",
            }}
          >
            <div
              style={{
                height: "100%",
              }}
            >
              <ListCard data>a1</ListCard>
              <ListCard data>a2</ListCard>
              <ListCard data>a3</ListCard>
              <ListCard data>a4</ListCard>
              <ListCard data>a5</ListCard>
              <ListCard data>a6</ListCard>
              <ListCard />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Home;
