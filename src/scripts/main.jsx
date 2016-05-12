import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TestScreen from './testscreen';

require('../css/main.scss');

class App extends React.Component {
  render() {
    return (
      <div className="mars-app">
        <div className="sidebar">
          <h1>Mars</h1>
          <div className="icon">
            <span></span>
          </div>
        </div>
        <div className="app-main">
          <TestScreen />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('react-app'));
