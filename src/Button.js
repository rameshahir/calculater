import React, { Component } from "react";

class Button extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="calculator-keys">
        <button onClick={()=> this.props.addDisplay(this.props.name)} >
          {this.props.name}
        </button>
      </div>
    );
  }
}

export default Button;
