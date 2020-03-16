import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={s.bgImage}>
        <img src="https://images.wallpaperscraft.ru/image/zdaniia_arhitektura_chb_160924_2560x1080.jpg" />
      </div>
      <div className={s.descriptionBlock}>
        <div>{props.profile.fullName}</div>
        <img src={props.profile.photos.large} />
        <div>About Me: {props.profile.aboutMe}</div>
        <div>
          Contacts:
          <div>facebook: {props.profile.contacts.facebook}</div>
          <div>website: {props.profile.contacts.website}</div>
          <div>vk: {props.profile.contacts.vk}</div>
          <div>twitter: {props.profile.contacts.twitter}</div>
          <div>instagram: {props.profile.contacts.instagram}</div>
          <div>youtube: {props.profile.contacts.youtube}</div>
          <div>github: {props.profile.contacts.github}</div>
          <div>mainLink: {props.profile.contacts.mainLink}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
