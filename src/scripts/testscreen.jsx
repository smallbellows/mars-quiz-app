import * as React from 'react';
import Timer from './timer';
import QuestionBox from './questionbox';

export default class TestScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      questionsCompleted: 0,
      questionsCorrect: 0,
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
        <button
          onClick={this._startEval.bind(this)}
          >
          Begin Evaluation
        </button>
      </div>
    )
  }
}
