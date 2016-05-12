import * as React from 'react';
import Timer from './timer';
import QuestionBox from './questionbox';

export default class TestScreen extends React.Component {

  render () {

    return(
      <div>
        <Timer />
        <QuestionBox />
      </div>
    )
  }
}
