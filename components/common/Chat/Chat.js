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
  const [status, setStatus] = useState("");
  const ws = useRef(null);
  const { request } = useHttp();
  const { token } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [ref]);
  useEffect(() => {
    ws.current = new WebSocket(`${API_SOCKET_HOST}/ws/chat/${chat_id}/`); // создаем ws соединение
    ws.current.onopen = () => setStatus("Соединение открыто"); // callback на ивент открытия соединения
    ws.current.onclose = () => setStatus("Соединение закрыто"); // callback на ивент закрытия соединения
    gettingData();
    console.log(ws);
    return () => ws.current.close(); // кода меняется isPaused - соединение закрывается
  }, [ws]);
  useEffect(() => {
    if (token && router.query.link) {
      (async () => {
        try {
          const headers = {};
          if (token) headers["Authorization"] = `Bearer ${token}`;

          const data = await request(
            `/api/chats/${chat_id}/messages`,
            "GET",
            null,
            headers
          );
          setMessages(data.results);
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, []);
  const gettingData = useCallback(() => {
    if (!ws.current) return;
    ws.current.onmessage = (e) => {
      //подписка на получение данных по вебсокету
      const message = JSON.parse(e.data);
      console.log(message);
    };
  }, []);

  return (
    <div className="chat">
      <button onClick={setter}>Назад к списку чатов</button>
      {status}
      <Window ref={ref}>
        {messages.map((message) => (
          <Message
            isMe={false}
            name={message.sender.display_name}
            icon={message.sender.avatar}
            datetime={new Date(message.update_at)}
          >
            {message.text}
          </Message>
        ))}
      </Window>
      <Input />
    </div>
  );
}

export default Chat;
