import React from "react";
import s from "./MyProfileInfo.module.css";

const MyProfileInfo = () => {
  return (
    <div>
      <div className={s.bgImg}>
        <img src="https://images.wallpaperscraft.ru/image/zdaniia_arhitektura_chb_160924_2560x1080.jpg" />
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default MyProfileInfo;
