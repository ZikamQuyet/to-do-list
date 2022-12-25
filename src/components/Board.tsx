import React, { useState } from "react";
import { Row, Typography } from "antd";
import { DashOutlined, DeleteOutlined } from "@ant-design/icons";
import PopupOption from "./PopupOption";
import styled from "styled-components";
import Option from "./Option";

interface IBoard {
  children: string;
  onClick?: void;
}
const OptionStyles = styled.div`
  position: relative;
`;
const { Text } = Typography;

const Board: React.FC<IBoard> = ({ children, onClick = () => {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Row align={"middle"} justify="space-between" style={{ flex: "1" }}>
        <Text onClick={onClick}>{children}</Text>
        {/* <OptionStyles>
          <DashOutlined onClick={handleOpen} style={{ cursor: "pointer" }} />
          <PopupOption display={isOpen ? "flex" : "none"} />
        </OptionStyles> */}
        <Option />
      </Row>
    </>
  );
};

export default Board;
