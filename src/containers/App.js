import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import { Link } from 'react-router';


import default class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = { showMenu: false, };
  }

  onMenuStateChange(showMenu){
      this.setState({ showMenu });
  }

  render() {
    return (
      <div>
        <AppBar
          open={this.state.showMenu}
          width={200}
          onRequestChange={show => this.onMenuStateChange(true)}
        />
        <Drawer
          docked={false}
          open={this.state.showMenu}
          with={200}
          onRequestChange={show => this.onMenuStateChange(show)}
        >
          <Link to="/"><MenuItem>Top</MenuItem></Link>
          <Link to="/attendancce"><MenuItem>Attendancce</MenuItem></Link>
          <Link to="/apply"><MenuItem>Apply</MenuItem></Link>
        </Drawer>

        {this.props.children}
      </div>
    )
  };
}