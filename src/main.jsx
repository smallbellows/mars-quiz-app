import * as React from 'react';
import * as ReactDOM from 'react-dom';

require('./main.scss');

class App extends React.Component {
  render() {
    return (<div></div>)
  }
}

ReactDom.render(<App/>, document.getElementById('mars-app'));
