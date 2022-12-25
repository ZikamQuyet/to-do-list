import { Divider, List } from "antd";
import React from "react";
import Board from "./Board";
interface IListBoard {}
const ListBoard: React.FC<IListBoard> = ({}) => {
  const data = ["Racing ", "Japanese", "Australian", "Man.", "Los Angeles ."];
  return (
    <>
      <List
        size="small"
        dataSource={data}
        renderItem={(item) => (
          <List.Item style={{ cursor: "pointer",padding:"20px 20px" }}>
            <Board>{item}</Board>
          </List.Item>
        )}
      />
    </>
  );
};

export default ListBoard;
