import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './user.css';

class User extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  state = {
    selected: false,
  };

  toggle = () => {
    this.setState({
      selected: !this.state.selected,
    });
  };

  render() {
    const { user, className } = this.props;
    const { firstName, lastName, avatar } = user;

    return (
      <div
        className={classNames(styles.user, className, {
          [styles.selected]: this.state.selected,
        })}
        onClick={this.toggle}
      >
        <img
          className={styles.avatar}
          src={avatar}
          alt={`${firstName} ${lastName}`}
        />
        <div className={styles.info}>
          {firstName} {lastName}
        </div>
      </div>
    );
  }
}

export default User;
