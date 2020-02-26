let rerenderEntireTree = () => {
  console.log("state changed");
};

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
    ],
    newPostText: "ggbet"
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

window.state = state;

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likeCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export let updateNewPostText = newText => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = observer => {
  rerenderEntireTree = observer;
};

export default state;
