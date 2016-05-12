import * as React from 'react';
import {questions} from './questions';

export default class QuestionBox extends React.Component {

constructor(props) {
  super(props);
  this.state={
    currentQ: 0
  }
}

  _submitAnswer(e) {
    e.preventDefault();
    this.setState({currentQ: this.state.currentQ + 1 })
  }

  render () {
    return (
      <div className="question">
        <span>{questions[this.state.currentQ].quest}</span>
        <form>
          <input type="text"/>
          <button
            onClick={this._submitAnswer.bind(this)}
            >
            submit answer</button>
        </form>
      </div>
    )
  }
}
