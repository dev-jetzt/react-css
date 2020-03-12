import './reset.css';
import './App.css';

import React from 'react';

// https://meyerweb.com/eric/tools/css/reset/
// https://yuilibrary.com/yui/docs/cssreset/

class App extends React.Component {

  // the render method
  public render() {

    // return the HTML
    return (
      <div className="box">

        <form className="modal-content">
          <div className="imgcontainer">
            <div className="avatar" />
          </div>

          <div className="container">
            <label htmlFor="uname">E-Mail</label>
            <input type="text" placeholder="Please enter your email address" />

            <label htmlFor="psw">Password</label>
            <input type="password" placeholder="Please enter your password" />

            <button type="submit">Login</button>
            <label>
              <input type="checkbox" name="remember" />Remember me
            </label>
          </div>

          <div className="container">
            <button className="cancelbtn">Cancel</button>
            <span className="psw">
              Forgot password?
            </span>
          </div>
        </form>
      </div>

    );
  }
}


export default App;
