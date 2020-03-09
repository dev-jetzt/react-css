import React from 'react';
import './Columns.css';
import { Container, Row, Col } from 'reactstrap';

// https://reactstrap.github.io/components/
// https://getbootstrap.com/docs/4.0/layout/grid/

class Columns extends React.Component {

  // the render method
  public render() {

    // add a menu to the right
    // add background colors to make it visible

    // return the HTML
    return (
      <div className="h-100">
        <Container className="h-100" fluid={true}>
          {/* <Row className="h-100">
            <Col className="bordered h-100">One column</Col>
          </Row> */}
          <Row>
            <Col className="bordered">First column</Col>
            <Col className="bordered">Second column</Col>
          </Row>
          <Row>
            <Col className="bordered">First column</Col>
            <Col className="bordered">Second column</Col>
            <Col className="bordered">Third column</Col>
          </Row>
          <Row>
            <Col xs="1" className="bordered">First column</Col>
            <Col className="bordered">Second column</Col>
            <Col xs="1" className="bordered">Third column</Col>
            <Col xs="1" className="bordered">Fourth column</Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default Columns;
