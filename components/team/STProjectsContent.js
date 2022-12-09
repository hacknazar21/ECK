import React from "react";
import Avatar from "../../src/img/avatars/01.png";
import { useRouter } from "next/router";
import Link from "next/link";

function STContent({ projects = [] }) {
  const router = useRouter();
  const { link } = router.query;
  function dayscount(deadline) {
    if (new Date(deadline) - new Date() > 0)
      return new Date(new Date(deadline) - new Date()).getDate();
    else return 0;
  }
  return (
    <div className="profile-cards">
      {projects.map((project) => (
        <article
          className={
            "projects-cards__card projects-card profile-cards__card profile-card" +
            " " +
            (dayscount(project.deadline) <= 3 ? "red-card" : "green-card")
          }
        >
          <h2 className="projects-card__title profile-card__title">
            {project.title}
          </h2>
          <div className="projects-card__text profile-card__text">
            <p>{project.description}</p>
          </div>
          <div className="projects-card__days-count profile-card__days-count">
            Осталось:
            <span>{dayscount(project.deadline)} дней</span>
          </div>
        </article>
      ))}
    </div>
  );
}
// {
//   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//     "fields_of_activity": [
//   "string"
// ],
//     "participants": [
//   {
//     "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//     "team": {
//       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//       "fields_of_activity": [
//         {
//           "id": 0,
//           "parent_field": {
//             "id": 0,
//             "name": "string",
//             "image": "string"
//           },
//           "name": "string",
//           "image": "string"
//         }
//       ],
//       "created_by": {
//         "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//         "iin": "string",
//         "full_name": "string",
//         "avatar": "string",
//         "email": "user@example.com",
//         "phone_number": "++++++++++++++++",
//         "company_name": "string",
//         "contacts": "string",
//         "address": "string"
//       },
//       "documents": [
//         {
//           "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//           "created_at": "2022-12-09T05:22:20.756Z",
//           "update_at": "2022-12-09T05:22:20.756Z",
//           "file": "string",
//           "uploaded_name": "string"
//         }
//       ],
//       "certificates": [
//         {
//           "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//           "created_at": "2022-12-09T05:22:20.756Z",
//           "update_at": "2022-12-09T05:22:20.756Z",
//           "file": "string",
//           "uploaded_name": "string"
//         }
//       ],
//       "members_count": 0,
//       "members": [
//         {
//           "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//           "company_name": "string",
//           "full_name": "string",
//           "display_name": "string",
//           "email": "user@example.com",
//           "avatar": "string",
//           "is_admin": true
//         }
//       ],
//       "is_team_owner": true,
//       "created_at": "2022-12-09T05:22:20.756Z",
//       "update_at": "2022-12-09T05:22:20.756Z",
//       "slug": "RLNXRad7hUEedvkFTZnSldVvSFK664BsW",
//       "name": "string",
//       "description": "string",
//       "image": "string",
//       "email": "user@example.com",
//       "is_active": true
//     },
//     "consortium": {
//       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//       "created_by": {
//         "image": "string",
//         "name": "string"
//       },
//       "project": "string",
//       "teams": [
//         {
//           "image": "string",
//           "name": "string"
//         }
//       ],
//       "teams_count": 0,
//       "created_at": "2022-12-09T05:22:20.756Z",
//       "update_at": "2022-12-09T05:22:20.756Z"
//     },
//     "user": {
//       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//       "fields_of_activity": [
//         {
//           "id": 0,
//           "parent_field": {
//             "id": 0,
//             "name": "string",
//             "image": "string"
//           },
//           "name": "string",
//           "image": "string"
//         }
//       ],
//       "certificates": [
//         {
//           "id": 0,
//           "created_at": "2022-12-09T05:22:20.756Z",
//           "update_at": "2022-12-09T05:22:20.756Z",
//           "file": "string",
//           "uploaded_name": "string",
//           "issuer": "string",
//           "issued_at": "2022-12-09",
//           "valid_until": "2022-12-09"
//         }
//       ],
//       "technical_base_files": [
//         {
//           "id": 0,
//           "created_at": "2022-12-09T05:22:20.756Z",
//           "update_at": "2022-12-09T05:22:20.756Z",
//           "file": "string",
//           "uploaded_name": "string"
//         }
//       ],
//       "display_name": "string",
//       "created_at": "2022-12-09T05:22:20.756Z",
//       "update_at": "2022-12-09T05:22:20.756Z",
//       "email": "user@example.com",
//       "is_validated": true,
//       "is_email_confirmed": true,
//       "user_type": "CUSTOMER",
//       "entity_type": "INDIVIDUAL",
//       "iin": "string",
//       "full_name": "string",
//       "avatar": "string",
//       "company_name": "string",
//       "birth_date": "2022-12-09",
//       "phone_number": "++++++++++++++++",
//       "contacts": "string",
//       "address": "string",
//       "education": "string",
//       "educated_at": "string",
//       "specialty": "string",
//       "job_title": "string",
//       "responsible_person": "string",
//       "director": "string",
//       "working_at": "string",
//       "work_experience": "string"
//     }
//   }
// ],
//     "participants_count": 0,
//     "is_project_creator": true,
//     "created_at": "2022-12-09T05:22:20.756Z",
//     "update_at": "2022-12-09T05:22:20.756Z",
//     "project_type": "CONTEST",
//     "status": "DECLARED",
//     "number": "string",
//     "title": "string",
//     "description": "string",
//     "requirements": "string",
//     "application_start_date": "2022-12-09",
//     "application_end_date": "2022-12-09",
//     "deadline": "2022-12-09",
//     "review_end_date": "2022-12-09",
//     "end_date": "2022-12-09",
//     "winner": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
// }
export default STContent;
