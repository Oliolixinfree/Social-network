let store = {
  _state: {
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
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state changed");
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likeCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }
};

window.state = store;
export default store;
