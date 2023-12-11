import { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
  }
  handleClick = () => {
    this.setState({ time: 0 });
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 1,
      }));
    }, 1000);
  };
  handleEnd = () => {
    clearInterval(this.timer);
    this.setState({ time: 0 });
  };
  render() {
    return (
      <div className="flex justify-center ">
        
        <div>
        <h1 className="m-3">{this.state.time}</h1>
          <button onClick={this.handleClick} className="border-2 border-yellow-300 py-2 px-3 m-3">Start</button>
          <button onClick={this.handleEnd} className="border-2 border-yellow-300 py-2 px-3 m-3">End</button>
        </div>
      </div>
    );
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
}
export default Timer;
