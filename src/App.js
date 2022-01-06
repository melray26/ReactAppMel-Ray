import React, { Component } from "react";
import "./App.css";
import Example from "./Components/Example";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      time: {},
      score: 0,
      seconds: 10
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
      //black screen at zero if ointts dont equal 2
      //blue screen if befo
    }
  }

  //Game screen comonents return is rendered
  //Add time to old project

  // checkWinner function
  checkWinner = () => {
    // Need some conditional to check if they have won Level 1 and increase the score if they win
    let score = this.state.score;
    score++;
    this.setState({ score: score });
    console.log("CHECKING");
  };

  render() {
    if (this.state.score == 0) {
      return (
        <div>
          <button onClick={this.startTimer}>Beginning</button>
          m: {this.state.time.m} s: {this.state.time.s}
          {/* Level 1 components */}
          <Example cw={this.checkWinner} />
        </div>
      );
    } else if (this.state.score == 1) {
      return (
        <div>
          <button onClick={this.startTimer}>Beginning</button>
          m: {this.state.time.m} s: {this.state.time.s}
          {/* Level 1 components */}
          <h1>THIS IS LEVEL 2 </h1>
        </div>
      );
    } else if (this.state.score == 2) {
      return (
        <div>
          <button onClick={this.startTimer}>Beginning</button>
          m: {this.state.time.m} s: {this.state.time.s}
          {/* Level 1 components */}
          <h1>THIS IS LEVEL 2 </h1>
        </div>
      );
    }else {
      return (
        <div>
          <button onClick={this.startTimer}>Beginning</button>
          m: {this.state.time.m} s: {this.state.time.s}
          {/* if statement that checks a score in state */}
          {/* if the score is 0, render the level 1 */}
          {/* if the score is 1, render level 2 */}
          {/* {this.state.score == 0 ? 'Hide' : 'Show'} */}
        </div>
      );
    }
  }
}

export default App;
