import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";

const MyPosts = props => {
  let postsElements = props.posts.map(p => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  // let newPostElement = React.createRef();

  let onAddPost = values => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

const AddNewPostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={"textarea"}
          name={"newPostText"}
          placeholder={"Enter post text"}
        />
      </div>
      <div>
        <button>add post</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({ form: "profileAddNewPostForm" })(
  AddNewPostForm
);

export default MyPosts;
