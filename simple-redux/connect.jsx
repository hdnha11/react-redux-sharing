import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default (mapStateToProps, actionToProps) => WrappedComponent =>
  class extends Component {
    static contextTypes = {
      store: PropTypes.object.isRequired,
    };

    state = {};

    componentDidMount() {
      const { store } = this.context;

      store.subscribe(() => {
        const newState = store.getState();
        const newProps = mapStateToProps(newState);
        this.setState(newProps);
      });
    }

    render() {
      const { dispatch } = this.context.store;
      const actionProps = Object.keys(actionToProps).reduce(
        (props, key) => ({
          ...props,
          [key]: (...args) => dispatch(actionToProps[key](...args)),
        }),
        {},
      );

      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          {...actionProps}
          dispatch={dispatch}
        />
      );
    }
  };
