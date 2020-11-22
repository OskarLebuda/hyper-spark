import HyperSpark from '../Components/Spark/HyperSpark';

export default function (Hyper, { React }) {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
      const { customChildren } = this.props;
      const existingChildren = customChildren
        ? customChildren instanceof Array
          ? customChildren
          : [customChildren]
        : [];

      return React.createElement(
        Hyper,
        Object.assign({}, this.props, {
          customInnerChildren: existingChildren.concat(
            React.createElement(HyperSpark, { ...this.props }, null),
          ),
        }),
      );
    }
  }
}