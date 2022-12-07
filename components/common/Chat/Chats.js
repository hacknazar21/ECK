import React from "react";
import Img1 from "/src/img/avatars/01.png";
function Chats({ chats, setter }) {
  return (
    <section className="chats">
      <div className="chats__items">
        {chats?.map((chat) => (
          <div
            key={chat.id}
            onClick={() => {
              setter(chat.id);
            }}
            className="chat-item"
          >
            <div className="chat-item__image">
              <img src={chat.team.image} alt="" />
            </div>
            <div className="chat-item__info">
              <div className="chat-item__header">
                <h3 className="chat-item__title">{chat.team.name}</h3>
                <div className="chat-item__datetime">
                  {new Date(chat.last_message.update_at).getHours()}:
                  {new Date(chat.last_message.update_at).getMinutes()}
                </div>
              </div>
              <div className="chat-item__last-message">
                <span>{chat.last_message.sender.display_name}:</span>
                <p>{chat.last_message.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Chats;
