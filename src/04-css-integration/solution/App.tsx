import './App.css';

import React from 'react';

import myStyleModule from './myStyle.module.css';

// https://reactjs.org/docs/faq-styling.html
// https://www.w3schools.com/react/react_css.asp

/**
 * Exercise
 * For each case integrate width: 100%, height: 30px and any background-color
 */

class App extends React.Component {

  public render() {

    const myStyleObject = { width: '100%', height: 30, backgroundColor: 'red' };

    return (
      <div>

        <div style={{ width: '100%', height: 30, backgroundColor: 'red' }}>
          Inline styling
        </div>

        <hr />

        <div style={myStyleObject}>
          Styling Object
        </div>

        <hr />

        <div className="makeItRed">
          Stylesheet styling
        </div>

        <hr />

        <div className={myStyleModule.makeItRed}>
          CSS Module styling
        </div>

      </div>
    );
  }
}


export default App;
