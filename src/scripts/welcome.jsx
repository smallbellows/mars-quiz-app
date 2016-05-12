import * as React from 'react';
import TestScreen from './testScreen';

export default class Welcome extends React.Component {

  _takeQuiz( ) {
    this.ref.readyButton
  }

  render() {
    return (
      <div>
        <button
          onClick={this._takeQuiz.bind(this)}
          ref="readyButton">
          Are you ready to drive the newest Mars Rover?
        </button>
        <TestScreen />
      </div>
    )
  }
}
