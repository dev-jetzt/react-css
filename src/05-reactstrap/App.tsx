import 'bootstrap';

import $ from 'jquery';
import React from 'react';
import { Container } from 'reactstrap';

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


        </Container>

      </div>
    );
  }
}


export default App;
