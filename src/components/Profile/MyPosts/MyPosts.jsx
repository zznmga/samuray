import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLength10, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormControls/FormControls';

const MyPosts = (props) => {
  console.log('Render MyPosts');
  const postsData = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let onSubmit = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <PostReduxForm onSubmit={onSubmit} />
      </div>
      <div className={s.posts}>{postsData} </div>
    </div>
  );
};

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name={'newPostText'}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

let PostReduxForm = reduxForm({ form: 'post' })(PostForm);
export default MyPosts;
