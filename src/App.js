import React, { Component } from "react";

import "./App.css";
import AllButtons from "./AllButtons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: "",
      doubleDisplay: "",
      erorMessage: "",
      equal: false
    };
  }

  addDisplay = number => {
    const { total, doubleDisplay, equal, erorMessage } = this.state;

    switch (number) {
      case "=":
        this.setState({
          total: eval(total),
          doubleDisplay: String(eval(total)),
          equal: !equal
        });
        break;

      case "C":
        this.setState({
          total: "",
          doubleDisplay: ""
        });
        break;
      case "X":
        this.setState({
          doubleDisplay: doubleDisplay.substring(0, doubleDisplay.length - 1),
          total: ""
        });
        break;
      default:
        /[*\/\-\+]/.test(number) && /[*\/\-\+]$/.test(doubleDisplay)
          ? this.setState({
              total: total.replace(total[total.length - 1], number),
              doubleDisplay: doubleDisplay.replace(
                doubleDisplay[doubleDisplay.length - 1],
                number
              ),
              equal: false
            })
          : /^[*\/\-\+]/.test(doubleDisplay)
          ? this.setState({
              erorMessage: "math error",
              doubleDisplay: "",
              total: ""
            })
          : this.setState({
              total: total + number,
              doubleDisplay: doubleDisplay + number,
              equal: false,
              erorMessage: ""
            });
    }
  };
  render() {
    const { total, erorMessage } = this.state;
    return (
      <div className="calculator">
        <h1>Ramesh Gagal Calulater</h1>
        <h2 className="calculator-screen">{this.state.doubleDisplay}</h2>
        {erorMessage && <h1>{erorMessage}</h1>}
        {!/[*\/\-\+]$/.test(total[total.length - 1]) && (
          <span className="calculator-screen">
            {this.state.equal ? "" : eval(total)}
          </span>
        )}

        <AllButtons addDisplay={this.addDisplay} />
      </div>
    );
  }
}

export default App;

// handleInput(event) {
//   // console.log(this.state.inputString)
//   // if (!regex.test(this.state.inputString)) { //If our 'patterns we don't want ' regex doesn't match anything
//     if (
//       operatorRegex.test(event.target.value) && //If event value passed in is an operator
//       operatorLast.test(this.state.inputString) //If the last value of our inputString is an operator
//     ) {
//       this.setState({
//         inputString: this.state.inputString.replace(
//           //replace the old operator with thte new one that was clicked
//           operatorLast,
//           event.target.value
//         )
//       });
//     } else {
//       this.setState({
//         inputString: this.state.inputString + event.target.value
//       });
//     }
//   // }
// }

// var operatorRegex = /[*\/\-\+]/;
// // tests whether a operator is the last character in inputString
// var operatorLast = /[*\/\-\+]$/;
