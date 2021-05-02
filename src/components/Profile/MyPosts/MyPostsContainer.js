import React from 'react';
import {
  addPostActionCreater,
  updateNewPostTextActionCreater,
} from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  debugger;
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().profilePage;

        let onAddPost = () => {
          store.dispatch(addPostActionCreater());
        };

        let onChangePost = (message) => {
          store.dispatch(updateNewPostTextActionCreater(message));
        };

        return (
          <MyPosts
            addPost={onAddPost}
            changePost={onChangePost}
            posts={state.posts}
            newPostText={state.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
