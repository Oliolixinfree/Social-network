import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className={s.item}>
        <NavLink to="/myProfile" activeClassName={s.activeLink}>
          My Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.activeLink}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>
          Message
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" activeClassName={s.activeLink}>
          Users
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/friends" activeClassName={s.activeLink}>
          Friends
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/communities" activeClassName={s.activeLink}>
          Communities
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/photo" activeClassName={s.activeLink}>
          Photo
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.activeLink}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/video" activeClassName={s.activeLink}>
          Video
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.activeLink}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
