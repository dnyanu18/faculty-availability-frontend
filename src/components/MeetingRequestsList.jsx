/*import React, { useEffect, useState } from "react";
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

import React, { useEffect, useState } from "react";
import API from "../services/api";
import MeetingRequestItem from "./MeetingRequestItem";

const MeetingRequestsList = () => {
  const [requests, setRequests] = useState([]);

  const loadRequests = async () => {
    const res = await API.get("/meeting/teacher");
    setRequests(res.data);
  };

  useEffect(() => {
    loadRequests();
  }, []);

  return (
    <div>
      <h5>Meeting Requests</h5>
      {requests.length === 0 ? (
        <p>No meeting requests.</p>
      ) : (
        requests.map((r) => (
          <MeetingRequestItem key={r._id} request={r} onAction={loadRequests} />
        ))
      )}
    </div>
  );
};

export default MeetingRequestsList;
*/
import React, { useEffect, useState } from "react";
import API from "../services/api";
import MeetingRequestItem from "./MeetingRequestItem";

const MeetingRequestsList = () => {
  const [requests, setRequests] = useState([]);

  const loadRequests = async () => {
    const res = await API.get("/meeting/teacher");
    setRequests(res.data);
  };

  useEffect(() => {
    loadRequests();
  }, []);

  return (
    <div className="mt-4">
      <h4 className="mb-3 text-center">📩 Meeting Requests</h4>
      {requests.length === 0 ? (
        <div className="alert alert-info text-center">No meeting requests.</div>
      ) : (
        <div className="list-group">
          {requests.map((r) => (
            <div key={r._id} className="mb-3">
              <MeetingRequestItem request={r} onAction={loadRequests} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MeetingRequestsList;
