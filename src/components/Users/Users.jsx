import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user-profile.png';
import Navbar from '../Navbar/Navbar';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { usersAPI } from '../../api/api';
import User from './User';
import Paginator from '../common/Paginator/Paginator';

let Users = ({
  totalCountUsers,
  pageSize,
  changePage,
  currentPage,
  ...props
}) => {
  return (
    <div>
      <Paginator
        totalItemsCount={totalCountUsers}
        pageSize={pageSize}
        changePage={changePage}
        currentPage={currentPage}
        portionSize={20}
      />
      {props.users.map((user) => (
        <User
          key={user.id}
          user={user}
          followThunk={props.followThunk}
          unfollowThunk={props.unfollowThunk}
          followingInProgress={props.followingInProgress}
        />
      ))}
    </div>
  );
};

export default Users;
