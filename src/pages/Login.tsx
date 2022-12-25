import React from "react";
import { Button, Checkbox, Form, Input, Row, Col, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { dataUser } from "../config/dataUser";

const { Title } = Typography;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    dataUser.forEach((item) => {
      if (
        item.username === values.username &&
        item.password === values.password
      ) {
        navigate("/");
      } else {
        alert("error username or password");
      }
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Row
        style={{ height: "100vh", flexDirection: "column" }}
        justify={"center"}
        align={"middle"}
      >
        <Col>
          <Title>TO DO LIST</Title>
        </Col>
        <Col style={{ width: "30%" }}>
          <Form
            name="basic"
            size="middle"
            // labelCol={{ span: 8 }}
            // wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Login;
