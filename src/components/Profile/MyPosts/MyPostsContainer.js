import React from 'react';
import { connect } from 'react-redux';
import {
  addPostActionCreater,
  updateNewPostTextActionCreater,
} from '../../../redux/profile-reducer';
//import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

// const MyPostsContainer = (props) => {
//   debugger;
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState().profilePage;

//         let onAddPost = () => {
//           store.dispatch(addPostActionCreater());
//         };

//         let onChangePost = (message) => {
//           store.dispatch(updateNewPostTextActionCreater(message));
//         };

//         return (
//           <MyPosts
//             addPost={onAddPost}
//             changePost={onChangePost}
//             posts={state.posts}
//             newPostText={state.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreater());
    },
    changePost: (message) => {
      dispatch(updateNewPostTextActionCreater(message));
    },
  };
};
//export default MyPostsContainer;

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
