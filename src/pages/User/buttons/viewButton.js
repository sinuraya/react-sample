import React from "react";

class ViewButton extends React.PureComponent {
  onViewClick = () => {
    this.props.onClick(this.props.item.uid);
  };
  render() {
    const item = this.props.item;
    return (
      <button className="btn btn-simple btn-default" onClick={this.onViewClick}>
        {item.username}
      </button>
    );
  }
}

export default ViewButton;
