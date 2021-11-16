import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';

import {
  follow,
  initUsers,
  unfollow,
  initTotalCountUsers,
  setCurrentPage,
  setIsFetching,
  toggleFollowing,
  getUsers,
  unfollowThunk,
  followThunk,
} from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

import { getUsersSelector } from '../../redux/users-selectors';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  changePage = (nextPage) => {
    this.props.getUsers(nextPage, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalCountUsers={this.props.totalCountUsers}
          pageSize={this.props.pageSize}
          users={this.props.users}
          changePage={this.changePage}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          currentPage={this.props.currentPage}
          toggleFollowing={this.props.toggleFollowing}
          followingInProgress={this.props.followingInProgress}
          unfollowThunk={this.props.unfollowThunk}
          followThunk={this.props.followThunk}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    totalCountUsers: state.usersPage.totalCountUsers,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default compose(
  // withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    setIsFetching,
    toggleFollowing,
    getUsers,
    unfollowThunk,
    followThunk,
  })
)(UsersContainer);
