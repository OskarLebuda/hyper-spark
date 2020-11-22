import React from 'react';
import Component from 'hyper/component';
import { mem as memoryData } from 'systeminformation';
import leftPad from 'left-pad';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMemory } from '@fortawesome/free-solid-svg-icons';

export default class Memory extends Component {
  static displayName() {
    return 'memory'
  }

  constructor(props) {
    super(props)

    this.state = {
      activeMemory: 0,
      totalMemory: 0
    }

    this.getMemory = this.getMemory.bind(this)
    this.setMemory = this.setMemory.bind(this)
  }

  componentDidMount() {
    this.setMemory()
    this.interval = setInterval(() => this.setMemory(), 2500)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  getMemory() {
    return memoryData().then(memory => {
      const totalMemory = this.getMb(memory.total)
      const activeMemory = this.getMb(memory.active)
      const totalWidth = totalMemory.toString().length

      return {
        activeMemory: leftPad(activeMemory, totalWidth, ''),
        totalMemory
      }
    })
  }

  setMemory() {
    return this.getMemory().then(data => this.setState(data))
  }

  getMb(bytes) {
    // 1024 * 1024 = 1048576
    return (bytes / 1048576).toFixed(0)
  }

  render() {
    return (
      <div class="element">
        <FontAwesomeIcon className='icon' icon={faMemory} />
        <span class="text">{this.state.activeMemory} MB / {this.state.totalMemory} MB</span>
      </div>
    )
  }
}
