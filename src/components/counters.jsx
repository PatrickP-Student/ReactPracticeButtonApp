import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    //object destructuring here...
    const {
      counters,
      onAddCounter,
      onReset,
      onDeleteAll,
      onDelete,
      onIncrement,
      onDecrement,
    } = this.props;
    return (
      <div>
        <button onClick={onAddCounter} className="btn btn-primary btn-sm m-2">
          Add new counter
        </button>
        <button onClick={onReset} className="btn btn-success btn-sm m-2">
          Reset
        </button>
        <button onClick={onDeleteAll} className="btn btn-primary btn-sm m-2">
          Delete All
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
