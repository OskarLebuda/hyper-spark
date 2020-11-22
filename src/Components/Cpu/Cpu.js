import React from 'react';
import Component from 'hyper/component';
import { currentLoad as cpuLoad } from 'systeminformation';
import leftPad from 'left-pad';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';

export default class Cpu extends Component {
  static displayName() {
    return 'cpu'
  }

  constructor(props) {
    super(props)

    this.state = {
      cpuLoad: 0,
    }
  }

  getCpuLoad() {
    cpuLoad().then(({ currentload }) =>
      this.setState({
        cpuLoad: leftPad(currentload.toFixed(2), 2, 0),
      }),
    )
  }

  componentDidMount() {
    this.getCpuLoad()
    this.interval = setInterval(() => this.getCpuLoad(), 2500)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { cpuLoad } = this.state;
    let color = '#9599a7';

    if (cpuLoad > 50 && cpuLoad < 80) {
      color = '#f1b44c';
    } else if (cpuLoad >= 80) {
      color = '#f46a6a';
    }

    return (
      <>
        <div class="element">
          <FontAwesomeIcon className='icon' icon={faMicrochip} />
          <span class="text">{this.state.cpuLoad}%</span>
        </div>

        <style jsx>{`
          .text {
            color: ${color}
          }
        `}</style>
      </>
    )
  }
}
