import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user-profile.png';
import Navbar from '../Navbar/Navbar';
import { NavLink } from 'react-router-dom';

let User = ({ user, followingInProgress, followThunk, unfollowThunk }) => {
  return (
    <div key={user.id}>
      <span>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img
              className={s.photo}
              src={user.photos.small == null ? userPhoto : user.photos.small}
              alt=""
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => unfollowThunk(user.id)}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => followThunk(user.id)}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{'user.location.country'}</div>
          <div>{'user.location.city'}</div>
        </span>
      </span>
    </div>
  );
};

export default User;
