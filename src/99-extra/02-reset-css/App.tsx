import './reset.css';

import React from 'react';

// https://meyerweb.com/eric/tools/css/reset/
// https://yuilibrary.com/yui/docs/cssreset/

class App extends React.Component {

  // the render method
  public render() {

    // return the HTML
    return (
      <div>
        <header style={{ width: '100%', backgroundColor: 'red' }}>
          <p>Some text</p>
        </header>

        <table>
          <thead>
            <tr>
              <th>Column A</th>
              <th>Column B</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Content 1</td>
              <td>Content 2</td>
            </tr>
            <tr>
              <td>Content 3</td>
              <td>Content 4</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}


export default App;
