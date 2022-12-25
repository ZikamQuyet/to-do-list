import React from "react";
import { Typography, Button, Avatar } from "antd";

const { Paragraph } = Typography;

interface IUserInfor {
  children: string;
  onClick: any;
}
const UserInfo: React.FC<IUserInfor> = ({ children, onClick = () => {} }) => {
  return (
    <>
      <Paragraph style={{ margin: 0, color: "#fff", fontWeight: "bold" }}>
        {children}
        {","}
      </Paragraph>
      <Paragraph onClick={onClick} style={{ margin: 0, cursor: "pointer" }}>
        Logout
      </Paragraph>

      <Avatar
        size={64}
        src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
    </>
  );
};

export default UserInfo;
