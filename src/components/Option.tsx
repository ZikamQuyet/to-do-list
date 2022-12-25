import { DashOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Popconfirm, Row, message } from "antd";
import React, { useState } from "react";
import styled from "styled-components";

const OptionStyles = styled.div`
  position: relative;
`;
const confirm = (e: React.MouseEvent<HTMLElement>) => {
  console.log(e);
  message.success("Click on Yes");
};

const cancel = (e: React.MouseEvent<HTMLElement>) => {
  console.log(e);
  message.error("Click on No");
};
const Option: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <OptionStyles>
      <DashOutlined onClick={handleOpen} style={{ cursor: "pointer" }} />
      <Row
        style={{
          display: `${isOpen ? "flex" : "none"}`,
          position: "absolute",
          bottom: 0,
          left: 0,
          width: 100,
          transform: "translate(-20%,100%)",
          gap: 10,
        }}
      >
        <EditOutlined style={{ cursor: "pointer" }} />
        <Popconfirm
          title="Delete the task"
          //   description="Are you sure to delete this task?"
          //   onConfirm={confirm}
          // onCancel={cancel}
          //   okText="Yes"
          //   cancelText="No"
        >
          <DeleteOutlined />
        </Popconfirm>
      </Row>
    </OptionStyles>
  );
};

export default Option;
