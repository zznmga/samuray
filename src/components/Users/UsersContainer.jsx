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
import axios from 'axios';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    totalCountUsers: state.usersPage.totalCountUsers,
  };
};

class UsersContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((data) => {
        this.props.initUsers(data.data.items);
        this.props.initTotalCountUsers(data.data.totalCount);
      });
  }

  changePage = (nextPage) => {
    this.props.setCurrentPage(nextPage);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${nextPage}`
      )
      .then((data) => {
        this.props.initUsers(data.data.items);
      });
  };

  render() {
    return (
      <Users
        totalCountUsers={this.props.totalCountUsers}
        pageSize={this.props.pageSize}
        users={this.props.users}
        changePage={this.changePage}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        currentPage={this.props.currentPage}
      />
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
