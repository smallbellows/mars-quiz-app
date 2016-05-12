import * as React from 'react';
import {questions} from './questions';

export default class QuestionBox extends React.Component {

constructor(props) {
  super(props);
  this.state={
    currentQ: 0,
    correctAnswers: 0
  }
}

  _submitAnswer(e) {
    e.preventDefault();

    let userAnswer = this.refs.userAnswer.value.toLowerCase();
    let correctAnswer = questions[this.state.currentQ].answer.toLowerCase();

      if (userAnswer === correctAnswer) {
        this.setState({correctAnswers: this.state.correctAnswers +1})
      }

      this.refs.userAnswer.value = '';

      if (this.state.currentQ < questions.length -1) {
        this.setState({currentQ: this.state.currentQ +1 });
      } else {
        this._endQuiz();
      }
  }
  
  _endQuiz() {
    console.log(this.state.correctAnswers);
  }

  render () {
    return (
      <div className="question">
        <span>{questions[this.state.currentQ].quest}</span>
        <form>
          <input type="text" ref="userAnswer"/>
          <button
            onClick={ this._submitAnswer.bind(this)}
            >
            submit answer</button>
        </form>
      </div>
    )
  }
}
