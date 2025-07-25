import React from "react";

const TeacherStatusCard = ({ teacher, status }) => {
  return (
    <div className={`card border-${status === "available" ? "success" : "danger"} mb-2`}>
      <div className="card-body">
        <h5 className="card-title">{teacher.name}</h5>
        <p className="card-text">{teacher.email}</p>
        <p>Status: <strong className={status === "available" ? "text-success" : "text-danger"}>{status}</strong></p>
      </div>
    </div>
  );
};

export default TeacherStatusCard;
