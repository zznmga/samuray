import React from 'react';
import { connect } from 'react-redux';
import {
  followAC,
  initUsersAC,
  unfollowAC,
  initTotalCountUsersAC,
  setCurrentPageAC,
} from '../../redux/users-reducer';
import Users from './Users';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    totalCountUsers: state.usersPage.totalCountUsers,
  };
};

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
