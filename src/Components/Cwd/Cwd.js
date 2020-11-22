import { shell } from 'electron';
import React from 'react';
import Component from 'hyper/component';
import tildify from 'tildify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

export default class Cwd extends Component {
  static displayName() {
    return 'cwd'
  }

  constructor(props) {
    super(props)
  }

  handleClick() {
    shell.openExternal('file://' + this.props.cwd);
  }

  render() {
    return (
      <div class="item cwd">
        <FontAwesomeIcon className='icon' icon={faFolder} />
        <a href="#" class="link" onClick={this.handleClick.bind(this)}>{this.props.cwd ? tildify(this.props.cwd) : this.props.cwd}</a>
      </div>
    )
  }
}
