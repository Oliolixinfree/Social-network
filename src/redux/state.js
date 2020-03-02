const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = "";
      this._state.dialogsPage.messages.push({ id: 6, message: body });
      this._callSubscriber(this._state);
    }
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  };
};

export const updateNewPostTextActionCreator = text => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  };
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE
  };
};

export const updateNewMessageBodyCreator = body => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  };
};

window.state = store;
export default store;
