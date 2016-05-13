import * as React from 'react';
import {browserHistory} from 'react-router';
import {questions} from './questions';

let correctAnswers = 0;

export default class QuestionBox extends React.Component {

constructor(props) {
  super(props);
  this.state={
    currentQ: 0,
  }
}

  _submitAnswer(e) {
    e.preventDefault();

    if(this.refs.userAnswer.value){
      
      let userAnswer = this.refs.userAnswer.value.toLowerCase();
      let correctAnswer = questions[this.state.currentQ].answer.toLowerCase();

        if (userAnswer === correctAnswer) {
          correctAnswers ++;
        }

        this.refs.userAnswer.value = '';

        if (this.state.currentQ < questions.length -1) {
          this.setState({currentQ: this.state.currentQ +1});
        }

        if(this.state.currentQ === questions.length -1) {
          this._endQuiz();
        }
    }
  }

  _endQuiz() {

    if (correctAnswers === questions.length) {
      browserHistory.push('success');
    } else {
      browserHistory.push('tryagain');
    }
  }


  render () {
    return (
      <div className="question">
        <div>{questions[this.state.currentQ].quest}</div>
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
