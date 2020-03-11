import React from "react";
import s from "./Communities.module.css";

const Communities = props => {
  if (props.communities.length === 0) {
    props.setCommunities([
      {
        id: 1,
        communityPhoto:
          "https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png",
        followed: false,
        communityName: "Memes",
        communityStatus: "memes every day"
      },
      {
        id: 2,
        communityPhoto:
          "https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png",
        followed: true,
        communityName: "News",
        communityStatus: "news every day"
      },
      {
        id: 3,
        communityPhoto:
          "https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png",
        followed: false,
        communityName: "Music",
        communityStatus: "music every day"
      }
    ]);
  }

  return (
    <div>
      {props.communities.map(c => (
        <div key={c.id}>
          <span>
            <div>
              <img src={c.communityPhoto} className={s.commPhoto} />
            </div>
            <div>
              {c.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(c.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(c.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{c.communityName}</div>
              <div>{c.communityStatus}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Communities;
