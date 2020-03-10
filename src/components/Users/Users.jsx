import React from "react";
import styles from "./Users.module.css";

const Users = props => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://otvet.imgsmail.ru/download/223392737_7e9b96c105f10b7276b54cba09ededd4_800.jpg",
        followed: false,
        fullName: "Elena",
        status: "I am a boss",
        location: {
          city: "Minsk",
          country: "Belarus"
        }
      },
      {
        id: 2,
        photoUrl:
          "https://otvet.imgsmail.ru/download/223392737_7e9b96c105f10b7276b54cba09ededd4_800.jpg",
        followed: true,
        fullName: "Vasya",
        status: "RUSSIA RUSSIA",
        location: {
          city: "Moscow",
          country: "Russia"
        }
      },
      {
        id: 3,
        photoUrl:
          "https://otvet.imgsmail.ru/download/223392737_7e9b96c105f10b7276b54cba09ededd4_800.jpg",
        followed: false,
        fullName: "Sasha",
        status: "Slava Uraine",
        location: {
          city: "Kiev",
          country: "Ukraine"
        }
      }
    ]);
  }

  return (
    <div>
      {props.users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={styles.usersPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
