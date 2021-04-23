import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  const postsItems = [
    { id: 1, message: 'Espana es pais muy bonita', likesCount: 12 },
    { id: 2, message: 'Barcelona es la capital de Cataluna', likesCount: 13 },
  ];
  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post
          message={postsItems[0].message}
          likesCount={postsItems[0].likesCount}
        />
        <Post
          message={postsItems[1].message}
          likesCount={postsItems[1].likesCount}
        />
      </div>
    </div>
  );
};

export default MyPosts;
