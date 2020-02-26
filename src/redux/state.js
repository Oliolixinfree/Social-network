import { renderEntiretree, renderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
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
    ]
  },
  dialogsPage: {
    dialogs: [
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
    ],
    messages: [
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
    ]
  }
};

export let addPost = postMessage => {
  let newPost = {
    id: 5,
    message: postMessage,
    likeCount: 0
  };
  state.profilePage.posts.push(newPost);
  renderEntireTree(state);
};

export default state;
