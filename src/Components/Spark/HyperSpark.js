import React from 'react';
import Component from 'hyper/component';
import decorate from 'hyper/decorate';
import HyperSparkBar from './HyperSparkBar';
import HyperSparkFooter from './HyperSparkFooter';

class HyperSpark extends Component {

  render() {
    return (
      <>
        <HyperSparkBar {...this.props}/>
        <HyperSparkFooter {...this.props}/>
      </>
    )
  }
}

export default decorate(HyperSpark, 'HyperSpark');
