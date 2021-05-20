import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user-profile.png';
import Navbar from '../Navbar/Navbar';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

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
                  onClick={() => {
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {
                          withCredentials: true,
                          headers: {
                            'API-KEY': '0e955090-a758-4ef0-ab2a-c4fec1b9c301',
                          },
                        }
                      )
                      .then((result) => {
                        console.log(result);
                        if (result.data.resultCode === 0) {
                          props.unfollow(u.id);
                        }
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            'API-KEY': '0e955090-a758-4ef0-ab2a-c4fec1b9c301',
                          },
                        }
                      )
                      .then((result) => {
                        console.log(result);
                        if (result.data.resultCode === 0) {
                          props.follow(u.id);
                        }
                      });
                  }}
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

/*    props.initUsers([
      {
        id: 1,
        followed: true,
        fullName: 'Robert',
        status: 'I am root',
        location: { city: 'Kiev', country: 'Ukraine' },
        photoUrl:
          'https://www.wonderwall.com/wp-content/uploads/sites/2/2020/02/1074921-naomi-watts-and-russell-crowe-are-seen-outside-of-aol-bu.jpg',
      },
      {
        id: 2,
        followed: false,
        fullName: 'Melisa',
        status: 'I am developer',
        location: { city: 'London', country: 'UK' },
        photoUrl:
          'https://www.wonderwall.com/wp-content/uploads/sites/2/2020/02/1074921-naomi-watts-and-russell-crowe-are-seen-outside-of-aol-bu.jpg',
      },
      {
        id: 3,
        followed: true,
        fullName: 'Karl',
        status: 'I am designer',
        location: { city: 'Barcelona', country: 'Espana' },
        photoUrl:
          'https://www.wonderwall.com/wp-content/uploads/sites/2/2020/02/1074921-naomi-watts-and-russell-crowe-are-seen-outside-of-aol-bu.jpg',
      },
    ]);
    */
