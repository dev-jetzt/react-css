import './App.css';

import React from 'react';

// https://htmlcheatsheet.com/css/
// https://www.w3schools.com/cssref/css_selectors.asp

// Don't use classes to solve the exercise

class App extends React.Component {

  public render() {

    return (
      <div>

        <p>
          i want to stay red
        </p>

        {/**
         * Exercise
         * Color this element accordingly using the element immediately after another element selector
         */}
        <p>
          i want to be blue
        </p>
      </div>
    );
  }
}

export default App;
