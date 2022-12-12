import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { CSSTransition } from "react-transition-group";
import { AuthContext } from "../../context/AuthContext";
import { useRouter } from "next/router";

function HeaderProfileMenu(props) {
  const [active, setActive] = useState(false);
  const router = useRouter();
  const { logout, userData } = useContext(AuthContext);
  function exitClickHandler() {
    logout();
  }

  return (
    <>
      <div className="header__account-link account">
        <Link href="/profile/my-profile">
          <a className="">Личный кабинет</a>
        </Link>
        <button
          onClick={() => {
            setActive((prevState) => !prevState);
          }}
          className="header__account-button"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9999 9.1697C16.8126 8.98345 16.5591 8.87891 16.2949 8.87891C16.0308 8.87891 15.7773 8.98345 15.5899 9.1697L11.9999 12.7097L8.45995 9.1697C8.27259 8.98345 8.01913 8.87891 7.75495 8.87891C7.49076 8.87891 7.23731 8.98345 7.04995 9.1697C6.95622 9.26266 6.88183 9.37326 6.83106 9.49512C6.78029 9.61698 6.75415 9.74769 6.75415 9.8797C6.75415 10.0117 6.78029 10.1424 6.83106 10.2643C6.88183 10.3861 6.95622 10.4967 7.04995 10.5897L11.2899 14.8297C11.3829 14.9234 11.4935 14.9978 11.6154 15.0486C11.7372 15.0994 11.8679 15.1255 11.9999 15.1255C12.132 15.1255 12.2627 15.0994 12.3845 15.0486C12.5064 14.9978 12.617 14.9234 12.7099 14.8297L16.9999 10.5897C17.0937 10.4967 17.1681 10.3861 17.2188 10.2643C17.2696 10.1424 17.2957 10.0117 17.2957 9.8797C17.2957 9.74769 17.2696 9.61698 17.2188 9.49512C17.1681 9.37326 17.0937 9.26266 16.9999 9.1697Z"
              fill="white"
            />
          </svg>
        </button>
        <CSSTransition
          in={active}
          classNames={"open"}
          timeout={400}
          mountOnEnter
          unmountOnExit
        >
          <div className="header__accountMenu header-accountMenu">
            <header className="header-accountMenu__header">
              {userData.full_name}
            </header>
            <ul className="header-accountMenu__list accountMenu-list">
              <li className="accountMenu-list__item">
                <Link href="/profile/my-profile">
                  <a className="accountMenu-list__link">Мой профиль</a>
                </Link>
              </li>
              <li className="accountMenu-list__item">
                <Link href="/profile/notifications">
                  <a className="accountMenu-list__link">Уведомления</a>
                </Link>
              </li>
              {userData.user_type === "EXECUTOR" && (
                <li className="accountMenu-list__item">
                  <Link href="/profile/team">
                    <a className="accountMenu-list__link">Команды</a>
                  </Link>
                </li>
              )}
              <li className="accountMenu-list__item">
                <Link href="/profile/projects">
                  <a className="accountMenu-list__link">Мои проекты</a>
                </Link>
              </li>
              <li className="accountMenu-list__item">
                <button
                  onClick={exitClickHandler}
                  className="accountMenu-list__link"
                >
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 10.5C3.5 10.7321 3.59219 10.9546 3.75628 11.1187C3.92038 11.2828 4.14294 11.375 4.375 11.375H11.0163L9.00375 13.3787C8.92174 13.4601 8.85664 13.5569 8.81222 13.6635C8.7678 13.7701 8.74493 13.8845 8.74493 14C8.74493 14.1155 8.7678 14.2299 8.81222 14.3365C8.85664 14.4431 8.92174 14.5399 9.00375 14.6212C9.08509 14.7033 9.18187 14.7684 9.2885 14.8128C9.39512 14.8572 9.50949 14.8801 9.625 14.8801C9.74051 14.8801 9.85488 14.8572 9.9615 14.8128C10.0681 14.7684 10.1649 14.7033 10.2463 14.6212L13.7463 11.1213C13.8259 11.038 13.8884 10.9399 13.93 10.8325C14.0175 10.6195 14.0175 10.3805 13.93 10.1675C13.8884 10.0601 13.8259 9.96197 13.7463 9.87875L10.2463 6.37875C10.1647 6.29717 10.0678 6.23245 9.96122 6.1883C9.85462 6.14415 9.74038 6.12142 9.625 6.12142C9.50962 6.12142 9.39538 6.14415 9.28878 6.1883C9.18219 6.23245 9.08533 6.29717 9.00375 6.37875C8.92217 6.46033 8.85745 6.55719 8.8133 6.66378C8.76914 6.77038 8.74642 6.88462 8.74642 7C8.74642 7.11538 8.76914 7.22962 8.8133 7.33622C8.85745 7.44281 8.92217 7.53967 9.00375 7.62125L11.0163 9.625H4.375C4.14294 9.625 3.92038 9.71719 3.75628 9.88128C3.59219 10.0454 3.5 10.2679 3.5 10.5ZM14.875 1.75H6.125C5.42881 1.75 4.76113 2.02656 4.26884 2.51884C3.77656 3.01113 3.5 3.67881 3.5 4.375V7C3.5 7.23206 3.59219 7.45462 3.75628 7.61872C3.92038 7.78281 4.14294 7.875 4.375 7.875C4.60706 7.875 4.82962 7.78281 4.99372 7.61872C5.15781 7.45462 5.25 7.23206 5.25 7V4.375C5.25 4.14294 5.34219 3.92038 5.50628 3.75628C5.67038 3.59219 5.89294 3.5 6.125 3.5H14.875C15.1071 3.5 15.3296 3.59219 15.4937 3.75628C15.6578 3.92038 15.75 4.14294 15.75 4.375V16.625C15.75 16.8571 15.6578 17.0796 15.4937 17.2437C15.3296 17.4078 15.1071 17.5 14.875 17.5H6.125C5.89294 17.5 5.67038 17.4078 5.50628 17.2437C5.34219 17.0796 5.25 16.8571 5.25 16.625V14C5.25 13.7679 5.15781 13.5454 4.99372 13.3813C4.82962 13.2172 4.60706 13.125 4.375 13.125C4.14294 13.125 3.92038 13.2172 3.75628 13.3813C3.59219 13.5454 3.5 13.7679 3.5 14V16.625C3.5 17.3212 3.77656 17.9889 4.26884 18.4812C4.76113 18.9734 5.42881 19.25 6.125 19.25H14.875C15.5712 19.25 16.2389 18.9734 16.7312 18.4812C17.2234 17.9889 17.5 17.3212 17.5 16.625V4.375C17.5 3.67881 17.2234 3.01113 16.7312 2.51884C16.2389 2.02656 15.5712 1.75 14.875 1.75Z"
                      fill="#C2C2C2"
                    />
                  </svg>
                  Выйти
                </button>
              </li>
            </ul>
          </div>
        </CSSTransition>
      </div>
    </>
  );
}

export default HeaderProfileMenu;
