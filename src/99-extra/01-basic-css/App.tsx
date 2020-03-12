import './App.css';

import React from 'react';

// https://www.w3schools.com/css/
// https://htmlcheatsheet.com/css/

class App extends React.Component {

  // the render method
  public render() {

    // return the HTML
    return (
      <div className="myApp">
        <p className="myText">
          Make this text uppercase
        </p>
      </div>
    );
  }
}


export default App;
