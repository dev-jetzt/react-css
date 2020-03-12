import 'bootstrap';

import $ from 'jquery';
import React from 'react';
import { Button, Container, Form, FormGroup, Input, Label, UncontrolledTooltip } from 'reactstrap';

// https://getbootstrap.com/docs/4.1/getting-started/introduction/
// https://reactstrap.github.io/components

class App extends React.Component {

  public componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip();
  }


  public render() {
    return (
      <div>

        <div className="container">

          <button className="btn btn-primary">
            My Button
          </button>

          <br />
          {/** 
           * Insert a button using reactstrap that looks exactly like the button above in the next line
           */}
          <Button color="primary">
            My Button
          </Button>

        </div>
        <hr />
        <Container>

          <form>
            <div className="form-group">
              <label>Username</label>
              <input className="form-control" placeholder="Please enter your username" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input className="form-control" type="password" placeholder="Please enter your password" />
            </div>
          </form>

          <br />
          {/** 
           * Insert a complete form using reactstrap that looks exactly like the form above in the next line 
          */}
          <Form>
            <FormGroup>
              <Label>Username</Label>
              <Input placeholder="Please enter your username" />
            </FormGroup>

            <FormGroup>
              <Label >Password</Label>
              <Input type="password" placeholder="Please enter your password" />
            </FormGroup>
          </Form>

        </Container>
        <hr />
        <Container>

          <button className="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Hello tooltip">
            Show Tooltip
          </button>

          <br />
          {/** 
           * Insert a tooltip using reactstrap that looks exactly like the form above in the next line after the comment
           * HINT: Use UncontrolledTooltip component instead of Tooltip
          */}
          <Button id="myTooltipId" color="secondary">
            Show Tooltip
          </Button>
          <UncontrolledTooltip placement="bottom" target="myTooltipId">
            Hello tooltip!
          </UncontrolledTooltip>

        </Container>

      </div>
    );
  }
}


export default App;
