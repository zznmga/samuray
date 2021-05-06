import React from 'react';
import s from './Users.module.css';

const Users = (props) => {
  debugger;
  if (props.users.length === 0) {
    console.log('initUsers');
    props.initUsers([
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
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img className={s.photo} src={u.photoUrl} alt="" />
            </div>
            <div>
              {u.followed ? (
                <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
              ) : (
                <button onClick={() => props.follow(u.id)}>Follow</button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
