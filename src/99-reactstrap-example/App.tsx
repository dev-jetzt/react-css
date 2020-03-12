import './App.css';

import React from 'react';
import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Col,
    Container,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Form,
    FormGroup,
    Input,
    InputGroup,
    Label,
    Nav,
    NavItem,
    NavLink,
    Row,
    UncontrolledDropdown
} from 'reactstrap';

// https://www.airbnb.de/

class App extends React.Component {

  // the render method
  public render() {

    // return the HTML
    return (
      <div className="app h-100">
        <Container className="h-100 d-flex flex-column overflow-auto" fluid={true}>
          <Row>
            <Col xs="12" className="d-lg-none">
              <UncontrolledDropdown>
                <DropdownToggle tag="a">
                  <div className="app-logo" />
                </DropdownToggle>

                <DropdownMenu>
                  <DropdownItem>
                    <NavLink href="#">Deutsch (DE)</NavLink>
                  </DropdownItem>

                  <DropdownItem>
                    <NavLink href="#">€ EUR</NavLink>
                  </DropdownItem>

                  <DropdownItem>
                    <NavLink href="#">Sei Gastgeber einer Unterkunft</NavLink>
                  </DropdownItem>

                  <DropdownItem>
                    <NavLink href="#">Biete eine Entdeckung an</NavLink>
                  </DropdownItem>

                  <DropdownItem>
                    <NavLink href="#">Hilfe</NavLink>
                  </DropdownItem>

                  <DropdownItem>
                    <NavLink href="#">Registrieren</NavLink>
                  </DropdownItem>

                  <DropdownItem>
                    <NavLink href="#">Einloggen</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Col>
            
            <Col xs="1" className="d-none d-lg-block">
              <div className="app-logo" />
            </Col>
            <Col xs="11" className="d-none d-lg-block">
              <Nav className="justify-content-end">
                <NavItem>
                  <NavLink href="#">Deutsch (DE)</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="#">€ EUR</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="#">Sei Gastgeber einer Unterkunft</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="#">Biete eine Entdeckung an</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="#">Hilfe</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="#">Registrieren</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="#">Einloggen</NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>

          <Row className="pt-5" >
            <Col xs="1" />

            <Col xs="4">
              <Card body className="app-dialog">
                <CardTitle>
                  <h2>Buche einzigartige Unterkünfte und Aktivitäten.</h2>
                </CardTitle>

                <CardBody className="p-0">

                  <Form>
                    <FormGroup>
                      <Label>Wo</Label>
                      <Input type="text" placeholder="Überall" />
                    </FormGroup>

                    <FormGroup>
                      <Row noGutters>
                        <Col>
                          <Label>Check-In</Label>
                        </Col>
                        <Col>
                          <Label>Check-Out</Label>
                        </Col>
                      </Row>
                      <InputGroup>
                        <Input type="date" placeholder="TT.MM.JJJJ" />
                        <Input type="date" placeholder="TT.MM.JJJJ" />
                      </InputGroup>
                    </FormGroup>

                    <FormGroup>
                      <Label>Gäste</Label>
                      <Input type="select">
                        <option disabled>Gäste</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>5+</option>
                      </Input>
                    </FormGroup>

                    <div className="text-right">
                      <Button color="primary">Suche</Button>
                    </div>
                  </Form>

                </CardBody>

              </Card>
            </Col>
          </Row>

          <Row className="mt-auto">
            <Col>
              <Nav className="justify-content-end">
                <NavItem>
                  <NavLink className="text-right" href="#">Mehr als 300 einzigartige Unterkünfte <br />in München</NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default App;
