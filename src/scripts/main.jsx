import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect} from 'react-router';
import Welcome from './welcome';
import TestScreen from './testscreen';

require('../css/main.scss');

class App extends React.Component {
  render() {
    return (
      <div className="app-panel">
        <Router history={browserHistory}>
          <Redirect from="/" to="/welcome"/>
          <Route path="/welcome"component={Welcome} />
          <Route path="/test" component={TestScreen} />
        </Router>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app-main'));
