import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>Hora</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
