import * as React from 'react';
import TestScreen from './testScreen';

export default class Welcome extends React.Component {


  

  render() {
    return (
      <div>
      <button>Take Test</button>
      <TestScreen />
      </div>
    )
  }
}
