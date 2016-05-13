import * as React from 'react';
import {browserHistory} from 'react-router';
import TestScreen from './testscreen';

export default class Welcome extends React.Component {

  _takeQuiz( ) {
    browserHistory.push('test');
  }

  render() {
    return (

          <button
            className="main-button"
            onClick={this._takeQuiz}
            >
            Are you ready to drive the newest Mars Rover?
          </button>

    )
  }
}
