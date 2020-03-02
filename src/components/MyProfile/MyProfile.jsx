import React from "react";
import s from "./MyProfile.module.css";
import MyProfileInfo from "./MyProfileInfo/MyProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const MyProfile = props => {
  return (
    <div>
      <MyProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default MyProfile;
