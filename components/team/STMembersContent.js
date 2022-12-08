import React from "react";
import Avatar from "../../src/img/avatars/01.png";
import { useRouter } from "next/router";
import Link from "next/link";

function STMembersContent({ members }) {
  return (
    <>
      {members.map((member) => (
        <article
          key={member.id}
          className="single-team-members__member single-team-member"
        >
          <div className="single-team-member__info">
            <div className="single-team-member__icon">
              <img src={member.avatar} alt="" />
            </div>
            <div className="single-team-member__name-box">
              <div className="single-team-member__name">{member.full_name}</div>
              <a
                href={"mailto:" + member.email}
                className="single-team-member__email"
              >
                {member.email}
              </a>
            </div>
            {member.is_admin && (
              <div className="single-team-member__role">Администратор</div>
            )}
          </div>
          <div className="single-team-member__actions">
            <Link href="/user/[link]" as={"/user/" + member.id}>
              <a className="window-notification__button window-notification__button_active">
                Смотреть профиль
              </a>
            </Link>
          </div>
        </article>
      ))}
    </>
  );
}

export default STMembersContent;
