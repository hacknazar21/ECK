import React from "react";
import ParticipantCard from "./ParticipantCard";

function Participants({ participants }) {
  return (
    <div className="project-modal__teams project-modal-teams">
      <h2 className="project-modal-teams__title">Участники</h2>
      {participants?.map((participant, id) => (
        <ParticipantCard key={participant.id || id} participant={participant} />
      ))}
    </div>
  );
}

export default Participants;
