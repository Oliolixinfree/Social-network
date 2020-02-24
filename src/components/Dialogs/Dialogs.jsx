import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = props => {
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

  let dialogsElements = dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = messages.map(m => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
