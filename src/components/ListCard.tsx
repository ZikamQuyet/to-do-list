import { DashOutlined } from "@ant-design/icons";
import { Col, Divider, Row, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import AddNew from "./AddNew";
import CardToDo from "./CardToDo";
import "./ListCard.modules.scss";
import Option from "./Option";

interface IListCard {
  children?: string;
  onClick?: void;
  data?: any;
}
const { Title } = Typography;
const ListCard: React.FC<IListCard> = ({ children, onClick, data }) => {
  return (
    <>
      {data ? (
        <Row
          className="list-card"
          style={{
            display: "inline-flex",
            width: "280px",
            overflow: "scroll",
            background: "#ccc",
            padding: "10px",
            borderRadius: "8px",
            gap: "20px",
            maxHeight: "100%",
            marginRight: "20px",
          }}
          justify="start"
        >
          <Col span={24}>
            <Row
              style={{ width: "100%",padding:10 }}
              align="middle"
              justify="space-between"
            >
              <Title level={4}>{children}</Title>
              <Option />
            </Row>
            <Divider style={{ margin: 0 }} />
          </Col>
          <Col span={24}>
            <CardToDo>a</CardToDo>
          </Col>
          <Col span={24}>
            <CardToDo>a</CardToDo>
          </Col>
          <Col span={24}>
            <CardToDo>a</CardToDo>
          </Col>
          <Col span={24}>
            <CardToDo>a</CardToDo>
          </Col>
          <Col span={24}>
            <CardToDo>a</CardToDo>
          </Col>
          <Col span={24}>
            <CardToDo>a</CardToDo>
          </Col>
          <Col span={24}>
            <CardToDo>a</CardToDo>
          </Col>
          <Col span={24}>
            <CardToDo>a</CardToDo>
          </Col>
          <Col span={24}>
            <CardToDo>a</CardToDo>
          </Col>
          <Col span={24}>
            <CardToDo>a</CardToDo>
          </Col>
          <Col span={24}>
            <CardToDo>a</CardToDo>
          </Col>
          <Col span={24}>
            <Divider style={{ margin: "10px 0" }} />
            <AddNew>Add a card</AddNew>
          </Col>
        </Row>
      ) : (
        <Row
          style={{
            display: "inline-flex",
            width: "280px",
            background: "#ccc",
            padding: "10px",
            borderRadius: "8px",
            gap: "20px",
            maxHeight: "100%",
            marginRight: "20px",
          }}
          justify="start"
        >
          <AddNew>Add another list</AddNew>
        </Row>
      )}
    </>
  );
};

export default ListCard;
