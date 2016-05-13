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

  _endQuiz(success) {

    // this.setState({start: false});
    if (success) {
      console.log('pass');
    }
    else {
      console.log('fail');
    }
  }

  render () {

    return(
      <div>
        {this.state.start ?
          <Timer
            endQuiz={this._endQuiz.bind(this)}
          /> : ''}
        {!this.state.start ?
          <button
          className="main-button"
          onClick={this._startEval.bind(this)}
          >
          Begin Evaluation
        </button>
        :
        <QuestionBox
          currentQ={this.state.questionsCompleted}
          endQuiz={this._endQuiz.bind(this)}/> }

      </div>
    )
  }
}
