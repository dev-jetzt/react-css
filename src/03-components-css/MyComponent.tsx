import React from 'react';

interface IProps {
  className?: string
}

class MyComponent extends React.Component<IProps> {

  // the render method
  public render() {

    // return the HTML
    return (
      <span className={this.props.className}>
        Make this text uppercase
      </span>
    );
  }
}


export default MyComponent;
