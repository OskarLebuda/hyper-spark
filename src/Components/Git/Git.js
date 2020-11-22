import React from 'react'
import Component from 'hyper/component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

export default class Git extends Component {
  static displayName() {
    return 'git'
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div class="item git">
        {(this.props.git && this.props.git.branch) ?
          <>
            <FontAwesomeIcon className='icon' icon={faCodeBranch} />
            <div class="text">{this.props.git.branch}</div>
            {this.props.git.dirty ? <div class="dirty">{this.props.git.dirty}</div> : null}
            {this.props.git.ahead ? <div class="ahead">{this.props.git.ahead}</div> : null}
          </>
          : null}
      </div>
    )
  }
}
