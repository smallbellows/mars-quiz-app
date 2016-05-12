import * as React from 'react';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: 60
    }
  }

  componentDidMount() {
    this.timer = setInterval(this._countdown.bind(this), 1000);
  }

  _countdown() {
    this.setState({ secondsLeft: this.state.secondsLeft - 1});
  }

  _renderCountdown() {
    
  }

  render () {
    return (
      <div className="timer">
        {this.state.secondsLeft}
      </div>
    )
  }
}
