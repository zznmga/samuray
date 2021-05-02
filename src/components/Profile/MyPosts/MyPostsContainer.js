import React from 'react';
import {
  addPostActionCreater,
  updateNewPostTextActionCreater,
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let state = props.store.getState().profilePage;

  let onAddPost = () => {
    props.store.dispatch(addPostActionCreater());
  };

  let onChangePost = (message) => {
    props.store.dispatch(updateNewPostTextActionCreater(message));
  };

  return (
    <MyPosts
      addPost={onAddPost}
      changePost={onChangePost}
      posts={state.posts}
      newPostText={state.newPostText}
    />
  );
};

export default MyPostsContainer;
