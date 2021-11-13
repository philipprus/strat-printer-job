import React from "react";
import { Col, Row } from "reactstrap";
import ActionBar from "../ActionBar/ActionBar";
import Icon from "../Icon/Icon";

const PrinterStatus = () => {
  return (
    <Row className="printer__status printer__status_container">
      <Col>
        <ActionBar title="Job Manager Status" />
        <Row className="printer__status_information">
          <Col className="printer__status_title">Printer IP Address</Col>
          <Col className="printer__status_context">192.168.22.154</Col>
        </Row>
        <Row className="printer__status_information">
          <Col className="printer__status_title">Printer Name</Col>
          <Col className="printer__status_context">Boston J750</Col>
        </Row>
        <Row className="printer__status_information">
          <Col className="printer__status_title">Status</Col>
          <Col className="printer__status_context connected">
            <Icon icon="connected" width={15} height={15} />
            Connected
          </Col>
        </Row>
        <Row className="printer__status_information">
          <Col className="printer__status_title">Embedded software</Col>
          <Col className="printer__status_context connected">
            <Icon icon="connected" width={15} height={15} />
            Connected
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default React.memo(PrinterStatus);
