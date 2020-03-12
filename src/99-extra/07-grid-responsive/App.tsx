import './App.css';

import React from 'react';
import { Col, Container, Row } from 'reactstrap';

// https://reactstrap.github.io/components/layout/
// https://getbootstrap.com/docs/4.1/layout/grid/#responsive-classes

class App extends React.Component {

  public render() {

    return (
      <div className="app h-100">
        <Container className="h-100 app-lesson" fluid={true}>

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

          <Row className="mt-0 mb-0">
            <Col xs="12" lg="6">Col-12 <br /> Col-Large-6</Col>
            <Col xs="12" lg="6">Col-12 <br /> Col-Large-6</Col>
          </Row>

          <Row className="bg-1">
            <Col xs="12" md="4" lg="3">Col-12 <br /> Col-Large-3</Col>
            <Col xs="6" md="4" lg="6">Col-12 <br /> Col-Large-6</Col>
            <Col xs="6" md="4" lg="3">Col-12 <br /> Col-Large-3</Col>
          </Row>

          <Row className="bg-2">
            <Col xs="8" md="4" lg="3">Col-12 <br /> Col-Large-3</Col>
            <Col xs="4" md="2" lg="3">Col-12 <br /> Col-Large-3</Col>
            <Col xs="4" md="2" lg="3">Col-12 <br /> Col-Large-6</Col>
            <Col xs="8" md="4" lg="3">Col-12 <br /> Col-Large-3</Col>
          </Row>

          <Row className="bg-3">
            <Col xs="12" sm="6" md={{ size: 4, offset: 2 }} lg={{ size: 3, offset: 3 }}>
              Col-12 <br /> Col-Small-6 <br /> Col-Medium-4 | Offset-Medium-2 <br /> Col-Large-3 | Offset-Large-3
            </Col>
            <Col xs="12" sm="6" md="4" lg="3">
              Col-12 <br /> Col-Small-6 <br /> Col-Medium-4 <br /> Col-Large-3
            </Col>
          </Row>

          <Row className="bg-4">
            <Col xs="12" sm={{size: "auto", offset: 3}} lg={{size: "auto", offset: 4}}>
              Col-12 <br /> Col-Small-Auto | Offset-Small-3 <br /> Col-Large-Auto | Offset-Large-4 <br />
            </Col>
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
