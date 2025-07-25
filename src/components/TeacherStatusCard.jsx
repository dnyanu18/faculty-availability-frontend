
/*
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
*/
const TeacherStatusCard = ({ teacher, status }) => {
  return (
    <div
      className={`card border-start-5 border-${status === "available" ? "success" : "danger"} shadow-sm mb-3`}
      style={{ borderLeftWidth: "5px" }}
    >
      <div className="card-body">
        <h5 className="card-title d-flex justify-content-between align-items-center">
          {teacher.name}
          <span
            className={`badge ${
              status === "available" ? "bg-success" : "bg-danger"
            }`}
          >
            {status.toUpperCase()}
          </span>
        </h5>
        <p className="card-text mb-1">
          <i className="bi bi-envelope-fill me-2"></i> {teacher.email}
        </p>
      </div>
    </div>
  );
};

export default TeacherStatusCard;
