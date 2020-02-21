import React from "react";
import s from "./MyProfile.module.css";
import MyProfileInfo from "./MyProfileInfo/MyProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const MyProfile = () => {
  return (
    <div>
      <MyProfileInfo />
      <MyPosts />
    </div>
  );
};

export default MyProfile;
