import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [{ id: 0, value: 0 }],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value > 0) {
      counters[index].value--;
    }
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    // this.setState({ counters: counters });
    // Because the key and new key share the same name, below is the shorthand way
    this.setState({ counters });
  };

  handleAddCounter = () => {
    const counters = [...this.state.counters];
    counters.length === 0
      ? counters.push({ id: 0, value: 0 })
      : counters.push({ id: counters[counters.length - 1].id + 1, value: 0 });
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDeleteAll = () => {
    this.setState({ counters: [] });
  };

  render() {
    return (
      <>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onAddCounter={this.handleAddCounter}
            onReset={this.handleReset}
            onDeleteAll={this.handleDeleteAll}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </>
    );
  }
}

export default App;
