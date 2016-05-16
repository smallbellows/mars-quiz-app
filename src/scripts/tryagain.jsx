import * as React from 'react';
import {browserHistory} from 'react-router';

export default class TryAgain extends React.Component {

_backToStart() {
  browserHistory.push('/');
}

  render() {
    return (
      <div className="end try-again">
        <button
          className="main-button "
          onClick={this._backToStart.bind(this)}>
          Try Again...
        </button>
      </div>
    )
  }

}
