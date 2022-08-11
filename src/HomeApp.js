import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LocalSearch from "./Components/Local_Search.js";
import "./HomeApp.css";
import PreLoadSearch from "./Components/Pre_Load_Search/index.js";

export const HomeApp = (props) => {
  return (
    <Container fluid="md" className="home-app">
      <Container fluid="md">
        <Row>
          <Col>
              <LocalSearch />
          </Col>
          <Col>
            <PreLoadSearch/>
          </Col>
          <Col>1 of 1</Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HomeApp;
