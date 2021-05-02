import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postsData = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onChangePost = () => {
    let message = newPostElement.current.value;
    props.changePost(message);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea
            onChange={onChangePost}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsData} </div>
    </div>
  );
};

export default MyPosts;
