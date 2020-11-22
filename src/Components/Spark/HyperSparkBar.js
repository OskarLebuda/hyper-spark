import React from 'react';
import Component from 'hyper/component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer, faCodeBranch, faCogs, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faDev } from '@fortawesome/free-brands-svg-icons';

export default class HyperSparkBar extends Component {
  static displayName() {
    return 'hyper-spark-bar';
  }

  constructor(props) {
    super(props)
  }

  runCommand(cmd) {
    const state = window.store.getState();
    const activeUid = state.sessions.activeUid;

    window.rpc.emit('hyper-spark execute commands', {
      uid: activeUid,
      cmd,
    });
  }

  render() {
    const { baseDir } = this.props.spark;
    const { cwd } = this.props;

    const showBar = (cwd && baseDir && cwd.startsWith(baseDir));

    return (
      <>
        {showBar ?
          <div class="spark">
            <div class="item">
              <a href="#" onClick={() => this.runCommand('spark run')}>
                <FontAwesomeIcon icon={faDev} />
              </a>
            </div>
            <div class="item">
              <a href="#" onClick={() => this.runCommand('spark build')}>
                <FontAwesomeIcon icon={faHammer} />
              </a>
            </div>
            <div class="item">
              <a href="#" onClick={() => this.runCommand('spark branch')}>
                <FontAwesomeIcon icon={faCodeBranch} />
              </a>
            </div>
            <div class="item">
              <a href="#" onClick={() => this.runCommand('spark config:reconfigure')}>
                <FontAwesomeIcon icon={faCogs} />
              </a>
            </div>
            <div class="item">
              <a href="#" onClick={() => this.runCommand('spark help')}>
                <FontAwesomeIcon icon={faQuestion} />
              </a>
            </div>
          </div>
          : null}
      </>
    )
  }
}