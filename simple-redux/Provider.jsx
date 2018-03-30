import { Component, Children } from 'react';
import PropTypes from 'prop-types';

class Provider extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired,
  };

  static childContextTypes = {
    store: PropTypes.object,
  };

  getChildContext() {
    const { store } = this.props;
    return { store };
  }

  render() {
    return Children.only(this.props.children);
  }
}

export default Provider;
