import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import axios from 'axios';
import {
  follow,
  initUsers,
  unfollow,
  initTotalCountUsers,
  setCurrentPage,
  setIsFetching,
  toggleFollowing,
} from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.initUsers(data.items);
        this.props.initTotalCountUsers(data.totalCount);
        this.props.setIsFetching(false);
      });
  }

  changePage = (nextPage) => {
    this.props.setCurrentPage(nextPage);
    this.props.setIsFetching(true);
    usersAPI.getUsers(nextPage, this.props.pageSize).then((data) => {
      this.props.initUsers(data.items);
      this.props.setIsFetching(false);
    });
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
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    totalCountUsers: state.usersPage.totalCountUsers,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};
/*
const mapDispatchToProps = (dispatch) => {
  return {
    follow(id) {
      dispatch(followAC(id));
    },
    unfollow(id) {
      dispatch(unfollowAC(id));
    },
    initUsers(users) {
      dispatch(initUsersAC(users));
    },
    initTotalCountUsers(totalCountUsers) {
      dispatch(initTotalCountUsersAC(totalCountUsers));
    },
    setCurrentPage(p) {
      dispatch(setCurrentPageAC(p));
    },
    setFetching(isFetching) {
      dispatch(setIsFetchingAC(isFetching));
    },
  };
};
*/

//export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
export default connect(mapStateToProps, {
  follow,
  unfollow,
  initUsers,
  initTotalCountUsers,
  setCurrentPage,
  setIsFetching,
  toggleFollowing,
})(UsersContainer);
