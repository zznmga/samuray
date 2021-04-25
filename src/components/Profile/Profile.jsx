import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  console.log(props);
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={props.state.posts}
        addPost={props.addPost}
        changePost={props.changePost}
        newPostText={props.state.newPostText}
      />
    </div>
  );
};

export default Profile;
