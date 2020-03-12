import './Flexbox.css';

import React from 'react';

import Box from './components/Box';
import Item from './components/Item';

// https://reactstrap.github.io/components/layout/
// https://getbootstrap.com/docs/4.1/utilities/flex/

class Flexbox extends React.Component {

  // the render method
  public render() {

    // return the HTML
    return (
      <div className="app h-100 w-100">
        <p>Exercise 1</p>
        <Box position="top-right" className="d-flex">
          <Item />
        </Box>

        <p>Exercise 2</p>
        <Box position="bottom-left" className="d-flex">
          <Item />
        </Box>

        <p>Exercise 3</p>
        <Box position="top" className="d-flex">
          <Item />
        </Box>

        <p>Exercise 4</p>
        <Box position="middle-left" className="d-flex">
          <Item />
        </Box>

        <p>Exercise 5</p>
        <Box position="middle" className="d-flex">
          <Item />
        </Box>

        <p>Exercise 6</p>
        <Box position="middle-right" className="d-flex">
          <Item />
        </Box>

        <p>Exercise 7</p>
        <Box position="bottom" className="d-flex">
          <Item />
        </Box>

        <p>Exercise 8</p>
        <Box position="bottom-right" className="d-flex">
          <Item />
        </Box>
      </div>
    );
  }
}

export default Flexbox;
