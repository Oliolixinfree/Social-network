import React from "react";
import s from "./Post.module.css";

const Post = props => {
  return (
    <div className={s.item}>
      <img src="https://memepedia.ru/wp-content/uploads/2019/06/ozadachennyy-kot-sidit-za-stolom-6.jpg" />
      {props.message}
      <div>
        <span>like</span>
        {props.likeCount}
      </div>
    </div>
  );
};

export default Post;
