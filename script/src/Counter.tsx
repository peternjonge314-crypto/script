import { Component } from 'react';


interface CounterState {
  count: number;
}

class Counter extends Component<Record<string, never>, CounterState> {
  
  state: CounterState = {
    count: 0,
  };

 
  increment = () => {
  
    this.setState((previousState) => ({
      count: previousState.count + 1,
    }));
  };

  render() {
    return (
      <section>
        <p>Count: {this.state.count}</p>
        <button type="button" onClick={this. increment}>
          increase
        </button>
      </section>
    );
  }
}

export default Counter;