import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';



injectTapEventPlugin();

class Root extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router history={hashHistory}>
          <Route path="/" component="{App}">
            <IndexRoute component="{Home}" />
            <Route path="/list" component="{List}">
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
