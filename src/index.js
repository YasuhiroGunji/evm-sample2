import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './container/app';
import Top from './container/pages/top';
import Attendance from './container/pages/attendance';
import Apply from './container/pages/apply';

import List from './component/list';
import Detail from './component/detail';
import Overwork from './component/overwork';

injectTapEventPlugin();

class Root extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router history={hashHistory}>
          <Route path="/" component="{App}">
            <IndexRoute component="{Top}" />
            <Route path="/attendance" component="{Attendance}">
            <Route path="/apply" component="{Apply}">
              <IndexRoute component="{Detail}" />
              <Route paht=":id" component="{Detail}" />
            </Route>
          </Route>
        </Router>
      </MuiThemeProvider>
    );
  }
}

render(<Root />, document.getElementById('main'));
