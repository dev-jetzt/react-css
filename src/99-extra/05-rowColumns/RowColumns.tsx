import './RowColumns.css';

import React from 'react';
import { Col, Container, Row } from 'reactstrap';

// https://reactstrap.github.io/components/layout/
// https://getbootstrap.com/docs/4.1/layout/grid/

class RowColumns extends React.Component {

  // the render method
  public render() {

    // return the HTML
    return (
      <div className="app h-100">
        <Container className="h-100 app-lesson" fluid={true}>

          <Row className="bg-1" xs="3">
            <Col>First Column</Col>
            <Col>Second Column</Col>
            <Col>Third Column</Col>
            <Col>Fourth Column</Col>
            <Col>Fifth Column</Col>
            <Col>Sixth Column</Col>
          </Row>

          {/* 
            row should allow 2 columns
           */}
          <Row className="bg-2">
            <Col>First Column</Col>
            <Col>Second Column</Col>
            <Col>Third Column</Col>
            <Col>Fourth Column</Col>
          </Row>

          {/* 
            row should allow 2 columns
           */}
          <Row className="bg-3">
            <Col>First Column</Col>
            <Col>Second Column</Col>
            <Col xs="6">Third Column</Col>
            <Col>Fourth Column</Col>
          </Row>

        </Container>
      </div>
    );
  }
}


export default RowColumns;
