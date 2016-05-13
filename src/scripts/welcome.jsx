import * as React from 'react';
import TestScreen from './testScreen';

export default class Welcome extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      ready: false
    }
  }
  _takeQuiz( ) {
    this.setState({ready: true});
  }

  render() {
    return (
      <div>
        {!this.state.ready ?
          <button className="main-button"
            onClick={this._takeQuiz.bind(this)}
            >
            Are you ready to drive the newest Mars Rover?
          </button>
        :
        <TestScreen />
        }

      </div>
    )
  }
}
