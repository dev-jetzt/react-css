import './SimpleLayout.css';

import React from 'react';
import { Col, Container, Row } from 'reactstrap';

// https://reactstrap.github.io/components/layout/
// https://getbootstrap.com/docs/4.1/utilities/flex/

class SimpleLayout extends React.Component {

  // the render method
  public render() {

    // return the HTML
    return (
      <div className="app h-100">
        <Container className="h-100 d-flex flex-column" fluid={true}>

          <Row className="mb-auto">
            <Col className="app-header">
              Header
            </Col>
          </Row>

          <Row className="flex-fill">
            <Col className="app-sidebar">
              Sidebar
            </Col>
          </Row>
          <Row className="flex-fill">
            <Col className="app-content">
              Content
            </Col>
          </Row>

          <Row className="mt-auto">
            <Col className="app-footer">
              Footer
            </Col>
          </Row>

        </Container>
      </div>
    );
  }
}


export default SimpleLayout;
