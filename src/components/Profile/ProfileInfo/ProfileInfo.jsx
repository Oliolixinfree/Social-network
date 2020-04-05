import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={s.bgImage}>
        <img src="https://images.wallpaperscraft.ru/image/zdaniia_arhitektura_chb_160924_2560x1080.jpg" />
      </div>

      <div className={s.descriptionBlock}>
        <div>{profile.fullName}</div>
        <img src={profile.photos.large} />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        <div>About Me: {profile.aboutMe}</div>
        <div>
          Contacts:
          <div>facebook: {profile.contacts.facebook}</div>
          <div>website: {profile.contacts.website}</div>
          <div>vk: {profile.contacts.vk}</div>
          <div>twitter: {profile.contacts.twitter}</div>
          <div>instagram: {profile.contacts.instagram}</div>
          <div>youtube: {profile.contacts.youtube}</div>
          <div>github: {profile.contacts.github}</div>
          <div>mainLink: {profile.contacts.mainLink}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
