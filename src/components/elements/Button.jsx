import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  handleDecrement() {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }

  render() {
    return (
      <div>
        <h3>Counter: {this.state.count}</h3>
        <button onClick={this.handleIncrement}>Increment</button> 
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default Button;