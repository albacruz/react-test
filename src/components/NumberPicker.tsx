import * as React from "react";

export interface NumberPickerState {
  numberPicked: number;
}

export default class NumberPicker extends React.Component<
  {},
  NumberPickerState
> {
  constructor(props) {
    super(props);
    this.state = {
      numberPicked: 0
    };

    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  incrementCount() {
    this.setState({
      numberPicked: this.state.numberPicked + 1
    });
  }

  decrementCount() {
    this.setState({
      numberPicked: this.state.numberPicked - 1
    });
  }

  render() {
    return (
      <>
        <button onClick={this.incrementCount}> + </button>
        <p>{this.state.numberPicked} </p>
        <button onClick={this.decrementCount}> - </button>
      </>
    );
  }
}
