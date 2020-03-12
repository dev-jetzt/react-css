import './Goal.css';

import React from 'react';

interface IProps {
  position: "top" | "left" | "right" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right" | "middle" | "middle-left" | "middle-right";
}

class Goal extends React.Component<IProps> {

  // the render method
  public render() {
    let componentClass = "";
    switch (this.props.position) {
      case "top":
        componentClass = "app-goal-top";
        break;
      case "left":
        componentClass = "app-goal-left";
        break;
      case "right":
        componentClass = "app-goal-right";
        break;
      case "bottom":
        componentClass = "app-goal-bottom";
        break;
      case "top-left":
        componentClass = "app-goal-top-left";
        break;
      case "top-right":
        componentClass = "app-goal-top-right";
        break;
      case "bottom-left":
        componentClass = "app-goal-bottom-left";
        break;
      case "bottom-right":
        componentClass = "app-goal-bottom-right";
        break;
      case "middle":
        componentClass = "app-goal-middle";
        break;
      case "middle-left":
        componentClass = "app-goal-middle-left";
        break;
      case "middle-right":
        componentClass = "app-goal-middle-right";
        break;
    }

    // return the HTML
    return (
      <div className={`app-goal ${componentClass}`}>
        {this.props.children}
      </div>
    );
  }
}


export default Goal;
