import * as React from 'react';
import {browserHistory} from 'react-router';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: 30
    }
  };

  componentDidMount() {
    this.timer = setInterval(this._countdown.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  _countdown() {
    if (this.state.secondsLeft > 0) {
      this.setState({ secondsLeft: this.state.secondsLeft - 1});
    } else {
      browserHistory.push('tryagain');
    }
  }

  _renderCountdown() {
    let min = Math.floor(this.state.secondsLeft / 60);
    let sec = this.state.secondsLeft % 60;
    if (sec < 10) {
      sec = `0${sec}`;
    }

    return (<span>{min}:{sec}</span> )
  }

  render () {
    return (
      <div className="timer">
        {this._renderCountdown()}
      </div>
    )
  }
}
