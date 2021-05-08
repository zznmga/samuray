import axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user-profile.png';

class Users extends React.Component {
  componentDidMount() {
    console.log('componentDidMount was called');
    this.getUsers();
  }

  componentDidUpdate() {
    console.log('componentDidUpdate was called');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount was called');
  }

  componentWillMount() {
    console.log('componentWillMount was called');
  }

  getUsers = () => {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((data) => this.props.initUsers(data.data.items));
  };

  render() {
    console.log('render ws called');
    return (
      <div>
        <span>Users : {this.props.users.length}</span>

        {/* <button onClick={this.getUsers}>Get Users</button> */}

        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  className={s.photo}
                  src={u.photos.small == null ? userPhoto : u.photos.small}
                  alt=""
                />
              </div>
              <div>
                {u.followed ? (
                  <button onClick={() => this.props.unfollow(u.id)}>
                    Unfollow
                  </button>
                ) : (
                  <button onClick={() => this.props.follow(u.id)}>
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
  }
}

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
