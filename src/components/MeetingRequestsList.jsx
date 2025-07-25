import React, { useEffect, useState } from "react";
import API from "../services/api";

const MeetingRequestsList = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const loadRequests = async () => {
      const res = await API.get("/meeting/teacher");
      setRequests(res.data);
    };
    loadRequests();
  }, []);

  return (
    <div>
      <h5>Meeting Requests</h5>
      {requests.length === 0 && <p>No requests</p>}
      <ul className="list-group">
        {requests.map((r) => (
          <li key={r._id} className="list-group-item">
            <strong>{r.studentId.name}</strong>: {r.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeetingRequestsList;
