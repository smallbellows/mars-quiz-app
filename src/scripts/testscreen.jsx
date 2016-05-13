import * as React from 'react';
import {browserHistory} from 'react-router';
import Timer from './timer';
import QuestionBox from './questionbox';

export default class TestScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      start: false
    }
  }

  _startEval() {
    this.setState({start: true});
  }

  render () {

    return(
      <div>
        {this.state.start ? <Timer /> : ''}
        {!this.state.start ?
          <button
          className="main-button"
          onClick={this._startEval.bind(this)}
          >
          Begin Evaluation
        </button>
        :
        <QuestionBox/> }

      </div>
    )
  }
}
