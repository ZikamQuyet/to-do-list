import React from "react";
import { Row, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Text } = Typography;

interface IAddNew {
  children?: string;
  onClick?: any;
}
const AddNew: React.FC<IAddNew> = ({ children, onClick = () => {} }) => {
  return (
    <>
      <Row
        onClick={onClick}
        align="middle"
        style={{ display: "inline-flex", cursor: "pointer" }}
      >
        <PlusOutlined style={{ marginRight: "10px" }} />
        <Text>{children}</Text>
      </Row>
    </>
  );
};

export default AddNew;
