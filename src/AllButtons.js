import React, { Component } from "react";
import Button from "./Button";
class AllButtons extends Component {
  render() {
    const allButton = [
      "C",
      "%",
      "X",
      "/",
      "7",
      "8",
      "9",
      "*",
      "4",
      "5",
      "6",
      "-",
      "1",
      "2",
      "3",
      "+",
      "0",
      "00",
      ".",
      "="
    ];

    return (
      <div>
        {allButton.map(button => (
            <Button name={button} {...this.props}/>
        ))}
        
      </div>
    );
  }
}

export default AllButtons;
