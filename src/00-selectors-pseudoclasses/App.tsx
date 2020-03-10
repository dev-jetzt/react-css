import './App.css';

import React from 'react';

// https://htmlcheatsheet.com/css/
// https://www.w3schools.com/css/css_pseudo_classes.asp

class App extends React.Component {

  public render() {

    return (
      <div>

        <p className="exercise-1">
          Add blue color ONLY on hover
        </p>
        
        <hr />

        <ul className="exercise-2">
          <li>I want to be blue</li>
          <li>Don't give me a color</li>
          <li>I want to be blue</li>
        </ul>

        <hr />

        <section className="exercise-3">
          <div>Don't give me a color</div>
          <p>I want to be blue</p>
          <div>Don't give me a color</div>
          <p>I want to be blue</p>
          <div>Don't give me a color</div>
        </section>

        <hr />

        <ul className="exercise-4">
          <li>Don't give me a color</li>
          <li>Don't give me a color</li>
          <li>I want to be blue</li>
          <li>Don't give me a color</li>
        </ul>

        <section className="exercise-5">
          <div>Don't give me a color</div>
          <div>Don't give me a color</div>
          <p>I want to be blue</p>
          <div>Don't give me a color</div>
        </section>

      </div>
    );
  }
}

export default App;
