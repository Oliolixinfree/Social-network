import React from "react";
import s from "./MyProfile.module.css";
import MyProfileInfo from "./MyProfileInfo/MyProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const MyProfile = props => {
  return (
    <div>
      <MyProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default MyProfile;
