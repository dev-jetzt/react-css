import './Box.css';

import React from 'react';

import Goal from './Goal';

interface IProps {
  className?: string;
  position: "top" | "left" | "right" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right" | "middle" | "middle-left" | "middle-right";
}

class Box extends React.Component<IProps> {

  // the render method
  public render() {

    let componentClass = this.props.className ?? "";

    // return the HTML
    return (
      <div className={`app-box ${componentClass}`}>
        {this.props.children}

        <Goal position={this.props.position} />
      </div>
    );
  }
}


export default Box;
