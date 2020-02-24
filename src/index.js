import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let posts = [
  {
    id: 1,
    message: "Hi, how are you?",
    likeCount: 12
  },
  {
    id: 2,
    message: "It's my first post",
    likeCount: 11
  }
];

let dialogs = [
  {
    id: 1,
    name: "Elena"
  },
  {
    id: 2,
    name: "Nastya"
  },
  {
    id: 3,
    name: "Masha"
  },
  {
    id: 4,
    name: "Katya"
  },
  {
    id: 5,
    name: "Dasha"
  },
  {
    id: 6,
    name: "Tanya"
  }
];

let messages = [
  {
    id: 1,
    message: "Hi"
  },
  {
    id: 2,
    message: "Yo"
  },
  {
    id: 3,
    message: "How to?"
  },
  {
    id: 4,
    message: "Hi"
  },
  {
    id: 5,
    message: "Yo"
  },
  {
    id: 6,
    message: "Yo"
  }
];

ReactDOM.render(
  <App posts={posts} dialogs={dialogs} messages={messages} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
