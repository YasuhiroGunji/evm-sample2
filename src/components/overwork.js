import React, { Component } from 'react';

import List from './list';
import Detail from './detail';

export default class Overwork extends Component {

  render() {
    return (
      <div>
          <h2>overwork</h2>
          <List />
          <Detail />
      </div>
    )
  };
}
