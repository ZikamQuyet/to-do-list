import React from "react";
import { Row, Typography } from "antd";
import { DashOutlined } from "@ant-design/icons";
import Option from "./Option";
const { Title } = Typography;
interface ICardToDo {
  children: string;
}
const CardToDo: React.FC<ICardToDo> = ({ children }) => {
  return (
    <Row
      align={"middle"}
      justify="space-between"
      style={{
        background: "rgb(245 245 245)",
        padding: "15px",
        borderRadius: "8px",
      }}
    >
      <Title level={4}>{children}</Title>
      <Option />
    </Row>
  );
};

export default CardToDo;
