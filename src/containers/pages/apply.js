import React, { Component } from 'react';

import List from '../../components/list'
import Detail from '../../components/detail'
import Overwork from '../../components/overwork'

export default class Apply extends Component {

  render() {
    return (
      <div>
          <h2>Apply</h2>
          <List />
          <Detail />
          <Overwork />
      </div>
    )
  };
}
