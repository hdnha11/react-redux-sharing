import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as usersActionCreators from '../../actions/users';
import User from '../user';
import styles from './user-list.css';

class UserList extends Component {
  static propTypes = {
    users: PropTypes.array,
    totalPages: PropTypes.number,
    currentPage: PropTypes.number,
    isFetching: PropTypes.bool,
    fetchUsers: PropTypes.func.isRequired,
  };

  static defaultProps = {
    users: [],
    totalPages: 0,
    currentPage: 1,
    isFetching: false,
  };

  componentDidMount() {
    const { fetchUsers } = this.props;

    fetchUsers();
  }

  loadMore = () => {
    const { currentPage, fetchUsers } = this.props;

    fetchUsers({ page: currentPage + 1 });
  };

  render() {
    const {
      users, totalPages, currentPage, isFetching,
    } = this.props;

    return (
      <div className={styles.userList}>
        {users.map(user => (
          <User className={styles.item} key={user.id} user={user} />
        ))}
        {!isFetching &&
          currentPage < totalPages && (
            <a className={styles.loadMore} href onClick={this.loadMore}>
              Load more...
            </a>
          )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.all,
  totalPages: state.users.totalPages,
  currentPage: state.users.currentPage,
  isFetching: state.users.isFetching,
});

export default connect(mapStateToProps, usersActionCreators)(UserList);
