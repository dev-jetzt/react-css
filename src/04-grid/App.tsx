import './App.css';

import React from 'react';
import { Col, Container, Row } from 'reactstrap';

// https://reactstrap.github.io/components/layout/
// https://getbootstrap.com/docs/4.1/layout/grid/

class App extends React.Component {

  public render() {

    return (
      <div className="app h-100">
        <Container className="h-100 app-container" fluid={true}>

          <Row className="mt-0 mb-0">
            <Col xs="12">Full width column</Col>
          </Row>

          <Row className="mt-0 mb-0">
            <Col xs="1">Col 1</Col>
            <Col xs="1">Col 2</Col>
            <Col xs="1">Col 3</Col>
            <Col xs="1">Col 4</Col>
            <Col xs="1">Col 5</Col>
            <Col xs="1">Col 6</Col>
            <Col xs="1">Col 7</Col>
            <Col xs="1">Col 8</Col>
            <Col xs="1">Col 9</Col>
            <Col xs="1">Col 10</Col>
            <Col xs="1">Col 11</Col>
            <Col xs="1">Col 12</Col>
          </Row>

          {/* 
            Exercise 1
            first column should have a length of 8
            second column should fill up the rest
           */}
          <Row className="bg-1">
            <Col>Col-8</Col>
            <Col>Col Rest</Col>
          </Row>


          {/* 
            Exercise 2
            first column should have a length of 4
            second column should have a length of 5
            third column should have a length of 2
            (hint: in the end there should be a gap with a length of 1)
           */}
          <Row className="bg-2">
            <Col>Col-4</Col>
            <Col>Col-5</Col>
            <Col>Col-2</Col>
          </Row>

          {/* 
            Exercise 3
            columns should fit in one row with the same size
           */}
          <Row className="bg-3">
            <Col xs="4">First column</Col>
            <Col xs="12">Second column</Col>
            <Col xs="10">Third column</Col>
          </Row>


          {/* 
            Exercise 4
            second column should have a variable width
           */}
          <Row className="bg-4">
            <Col xs="3">Col-3</Col>
            <Col>Auto Col (grows &amp; shrinks with content)</Col>
            <Col xs="3">Col-3</Col>
          </Row>


          {/* 
            Exercise 5
            first column should have a offset of 4
           */}
          <Row className="bg-5">
            <Col xs={{ size: 2 }}>Col-2 | Offset-4</Col>
            <Col xs="4">Col-4</Col>
          </Row>


        </Container>

        <Container fluid={true} className="grid">
          <Row>
            <Col xs="1"></Col>
            <Col xs="1"></Col>
            <Col xs="1"></Col>
            <Col xs="1"></Col>
            <Col xs="1"></Col>
            <Col xs="1"></Col>
            <Col xs="1"></Col>
            <Col xs="1"></Col>
            <Col xs="1"></Col>
            <Col xs="1"></Col>
            <Col xs="1"></Col>
            <Col xs="1"></Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default App;
