import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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
      ],
      newMessageBody: ""
    }
  },
  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  }
};

window.state = store;
export default store;
