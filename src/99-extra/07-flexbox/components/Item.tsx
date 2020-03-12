import './Item.css';

import React from 'react';

interface IProps {
  className?: string;
}

class Item extends React.Component<IProps> {

  // the render method
  public render() {

    let componentClass = this.props.className ?? "";

    // return the HTML
    return (
      <div className={`app-item ${componentClass}`}>
        {this.props.children}
      </div>
    );
  }
}


export default Item;
