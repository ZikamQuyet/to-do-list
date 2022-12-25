import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Row } from "antd";
import React from "react";
interface IPopupOption {
  display?: string;
}
const PopupOption: React.FC<IPopupOption> = ({ display }) => {
  return (
    <>
      <Row
        style={{
          display: `${display}`,
          position: "absolute",
          bottom: 0,
          left: 0,
          width: 100,
          transform: "translate(-20%,100%)",
          gap:10
        }}
        
      >
        <EditOutlined />
        <DeleteOutlined />
      </Row>
    </>
  );
};

export default PopupOption;
