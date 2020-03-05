const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 6, message: body });
      return state;
    default:
      return state;
  }
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

export default dialogsReducer;
