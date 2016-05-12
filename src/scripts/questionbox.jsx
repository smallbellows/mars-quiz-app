import * as React from 'react';
import {questions} from './questions';

export default class QuestionBox extends React.Component {

  _loadNextQuestion(index) {

    if (index < questions.length) {
      return (<span>{questions[index].quest}</span>)
    } else {
      this._endQuiz();
    }
  }

  _askQuestions() {

  }

  _endQuiz() {

  }

  render () {
    return (
      <div className="question">
        {this._askQuestions()}
      </div>
    )
  }
}
