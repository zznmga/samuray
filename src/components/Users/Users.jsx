import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user-profile.png';
import Navbar from '../Navbar/Navbar';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { usersAPI } from '../../api/api';

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalCountUsers / props.pageSize);
  let pages = new Array(pagesCount).fill(1).map((e, index) => index + 1);

  return (
    <div>
      <div>Users : {props.users.length}</div>
      <div>Total : {props.totalCountUsers}</div>
      <div>Pages : {pagesCount}</div>
      <div>
        {pages.map((p) => {
          return (
            <span
              key={p}
              onClick={(e) => props.changePage(p)}
              className={props.currentPage === p ? s.selectedPage : ''}
            >
              {p},
            </span>
          );
        })}
      </div>

      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + u.id}>
                <img
                  className={s.photo}
                  src={u.photos.small == null ? userPhoto : u.photos.small}
                  alt=""
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => props.unfollowThunk(u.id)}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => props.followThunk(u.id)}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{'u.location.country'}</div>
              <div>{'u.location.city'}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
