import { useRouter } from "next/router";

export default function Message({ icon, message }) {
  const router = useRouter();
  return (
    <>
      <section className="message">
        <div className="message__icon">
          <img src={icon} alt="" />
        </div>
        <h1 className="message__title">{message}</h1>
        <button
          onClick={() => {
            router.back();
          }}
          className="message__button unActive-button"
        >
          Закрыть окно
        </button>
      </section>
    </>
  );
}
