import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={s.logo}>
        <img
          src="https://pngimage.net/wp-content/uploads/2019/05/youtu-logo-png-1.png"
          alt="logo"
        />
      </div>
    </header>
  );
};

export default Header;
