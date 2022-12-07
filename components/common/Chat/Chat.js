import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Window from "./Window";
import Message from "./Message";
import Input from "./Input";
import Avatar from "../../../src/img/avatars/02.png";
import useHttp from "../../../hooks/hooks.http";
import { AuthContext } from "../../../context/AuthContext";
import { useRouter } from "next/router";

function Chat({ chat_id, setter }) {
  const ref = useRef(null);
  const [messages, setMessages] = useState([]);
  const API_SOCKET_HOST = "wss://eprof.kz";
  const [pagination, setPagination] = useState(true);
  const [messagesOffset, setMessagesOffset] = useState(0);
  const LIMIT = 50;
  const ws = useRef(null);
  const { request } = useHttp();
  const { token, userData } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    console.log(messages);
    if (ref.current && messagesOffset === 0) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [ref, messages]);
  useEffect(() => {
    ws.current = new WebSocket(`${API_SOCKET_HOST}/ws/chat/${chat_id}/`); // создаем ws соединение
    gettingData();
    return () => ws.current.close(); // кода меняется isPaused - соединение закрывается
  }, [ws]);
  useEffect(() => {
    if (token && router.query.link) {
      (async () => {
        try {
          const headers = {};
          if (token) headers["Authorization"] = `Bearer ${token}`;

          const data = await request(
            `/api/chats/${chat_id}/messages/?ordering=-created_at&limit=${LIMIT}`,
            "GET",
            null,
            headers
          );
          setMessages(data.results.reverse());
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, []);
  useEffect(() => {
    if (messagesOffset) {
      (async () => {
        try {
          const headers = {};
          if (token) headers["Authorization"] = `Bearer ${token}`;

          const data = await request(
            `/api/chats/${chat_id}/messages/?ordering=-created_at&limit=${LIMIT}&offset=${messagesOffset}`,
            "GET",
            null,
            headers
          );
          if (!data.next) setPagination(false);
          setMessages((prevState) => {
            data.results.map(
              (message) => (prevState = [message, ...prevState])
            );
            return prevState;
          });
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, [messagesOffset]);
  function onSendMessage() {
    ref.current.scrollTop = ref.current.scrollHeight;
  }
  const gettingData = useCallback(() => {
    if (!ws.current) return;
    ws.current.onmessage = (e) => {
      //подписка на получение данных по вебсокету
      const message = JSON.parse(e.data);
      setMessages((prevState) => [...prevState, message]);
    };
  }, []);

  return (
    <div className="chat">
      <button onClick={setter}>Назад к списку чатов</button>
      <Window ref={ref}>
        {pagination && (
          <button
            onClick={() => {
              setMessagesOffset((prevState) => prevState + LIMIT);
            }}
          >
            Показать еще
          </button>
        )}
        {messages.map((message, id) => (
          <Message
            key={message.id}
            isFirst={id === 0}
            isMe={message.sender.id === userData.id}
            name={message.sender.display_name}
            icon={message.sender.avatar}
            datetime={new Date(message.update_at)}
            attachments={message.attachments}
          >
            {message.text}
          </Message>
        ))}
      </Window>
      <Input
        chat_id={chat_id}
        updateMessages={() => {
          onSendMessage();
        }}
      />
    </div>
  );
}

export default Chat;
