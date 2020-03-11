import React from 'react';

// https://reactjs.org/docs/faq-styling.html
// https://www.w3schools.com/react/react_css.asp

/**
 * Exercise
 * For each case integrate width: 100%, height: 30px and any background-color
 */

class App extends React.Component {

  public render() {

    const myStyleObject = {};

    return (
      <div>

        <div>
          Inline styling
        </div>

        <hr />

        <div>
          Styling Object
        </div>

        <hr />

        <div>
          Stylesheet styling
        </div>

        <hr />

        <div>
          CSS Module styling
        </div>

      </div>
    );
  }
}


export default App;
