import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreater } from '../../../redux/profile-reducer';

import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreater(newPostText));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
