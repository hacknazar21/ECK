import React, { useEffect, useRef } from "react";
import Window from "./Window";
import Message from "./Message";
import Input from "./Input";
import Avatar from "../../../src/img/avatars/02.png";
function Chat(props) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [ref]);
  return (
    <div className="chat">
      <Window ref={ref}>
        <Message isMe={true}>
          Прикрепляю файлы, посмотрите и дайте фидбек
        </Message>
        <Message isMe={false} name={"Назгуль Юсупова"} icon={Avatar.src}>
          Я не могу просмотреть актальную информацию, скиньте ссылку
        </Message>
        <Message isMe={true}>
          Прикрепляю файлы, посмотрите и дайте фидбек
        </Message>
        <Message isMe={true}>
          Прикрепляю файлы, посмотрите и дайте фидбек
        </Message>
        <Message isMe={false} name={"Назгуль Юсупова"} icon={Avatar.src}>
          Я не могу просмотреть актальную информацию, скиньте ссылку
        </Message>
        <Message isMe={true}>
          Прикрепляю файлы, посмотрите и дайте фидбек
        </Message>
        <Message isMe={true}>
          Прикрепляю файлы, посмотрите и дайте фидбек
        </Message>
      </Window>
      <Input />
    </div>
  );
}

export default Chat;
