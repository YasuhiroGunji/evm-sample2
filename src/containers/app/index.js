import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import { Link } from 'react-router';


export default class App extends Component {

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
          title="evm-sampl2"
          onLeftIconButtonTouchTap={() => this.onMenuStateChange(true)}
        />
        <Drawer
          docked={false}
          open={this.state.showMenu}
          width={200}
          onRequestChange={(showMenu) => this.onMenuStateChange(showMenu)}
        >
          <Link to="/"><MenuItem onTouchTap={() => this.onMenuStateChange(false)}>Top</MenuItem></Link>
          <Link to="/attendance"><MenuItem onTouchTap={() => this.onMenuStateChange(false)}>Attendancce</MenuItem></Link>
          <Link to="/apply"><MenuItem onTouchTap={() => this.onMenuStateChange(false)}>Apply</MenuItem></Link>
        </Drawer>

        {this.props.children}
      </div>
    )
  };
}