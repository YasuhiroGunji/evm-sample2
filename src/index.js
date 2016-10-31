import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './containers/app';
import Top from './containers/pages/top';
import Attendance from './containers/pages/attendance';
import Apply from './containers/pages/apply';

import List from './components/list';
import Detail from './components/detail';
import Overwork from './components/overwork';

injectTapEventPlugin();

class Root extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Top} />
            <Route path="/attendance" component={Attendance} />
            <Route path="/apply" component={Apply}>
              <IndexRoute component={Overwork} />
              <Route path="/apply/overwork" component={Overwork}>
                <IndexRoute component={List} />
                <Route path="/apply/overwork/list" component={List} />
                <Route path="/apply/overwork/detail" component={Detail} />
              </Route>
            </Route>
          </Route>
        </Router>
      </MuiThemeProvider>
    );
  }
}

render(<Root />, document.getElementById('main'));

