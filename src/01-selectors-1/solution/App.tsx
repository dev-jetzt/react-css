import './App.css';

import React from 'react';

// https://htmlcheatsheet.com/css/
// https://www.w3schools.com/cssref/css_selectors.asp

// Don't use classes to solve the exercise

class App extends React.Component {

  public render() {

    return (
      <div>

        {/**
         * Exercise 1
         * Color this element accordingly using the id-selector
         */}
        <p id="myId">
          i want to be red
        </p>


        {/**
         * Exercise 2
         * Color this element accordingly using the class-selector
         */}
        <p className="myClass">
          i want to be orange
        </p>


        {/**
         * Exercise 3
         * Color this element accordingly using the element selector
         */}
        <section>
          i want to be yellow
        </section>


        {/**
         * Exercise 4
         * Color this element accordingly using the element inside element selector 
         */}
        <span>
          <p>
            i want to be green
          </p>
        </span>


        {/**
         * Exercise 5
         * Color this element accordingly using the child selector 
         */}
        <span>
          <span>
            <p>
              i want be blue
            </p>
          </span>
        </span>

      </div>
    );
  }
}

export default App;
