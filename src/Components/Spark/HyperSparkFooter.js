import React from 'react';
import Component from 'hyper/component';
import Cpu from '../Cpu/Cpu';
import Cwd from '../Cwd/Cwd';
import Git from '../Git/Git';
import Memory from '../Memory/Memory';

export default class HyperSparkFooter extends Component {
  static displayName() {
    return 'hyper-spark-footer';
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div class="footer">
        <Cwd {...this.props} />
        <div class="item usage">
          <Cpu {...this.props} />
          <Memory {...this.props} />
        </div>
        <Git {...this.props} />
      </div>
    )
  }
}