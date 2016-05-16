import * as React from 'react';
import {browserHistory} from 'react-router';

export default class Success extends React.Component {

  render() {
    return (
      <div className="end success">
        <h1>Success!!!</h1>
        <img src="../img/img-explorer.svg"/>
      </div>
    )
  }
}
