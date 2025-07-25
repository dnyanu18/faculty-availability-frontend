/*// src/components/MeetingRequestItem.jsx
import React, { useState } from "react";
import API from "../services/api";

const MeetingRequestItem = ({ request, onAction }) => {
  const [showReason, setShowReason] = useState(false);
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAccept = async () => {
    setLoading(true);
    await API.post(`/meeting/approve`, {
      requestId: request._id,
      status: "accepted"
    });
    onAction();
  };

  const handleReject = async () => {
    setLoading(true);
    await API.post(`/meeting/approve`, {
      requestId: request._id,
      status: "rejected",
      reason
    });
    onAction();
  };

  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <h5 className="card-title">{request.studentId.name}</h5>
        <p className="card-text">Message: {request.message}</p>
        <p className="card-text"><small className="text-muted">Requested on {new Date(request.createdAt).toLocaleString()}</small></p>

        {!showReason ? (
          <div>
            <button
              className="btn btn-success btn-sm me-2"
              onClick={handleAccept}
              disabled={loading}
            >
              Accept
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => setShowReason(true)}
              disabled={loading}
            >
              Reject
            </button>
          </div>
        ) : (
          <div>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Reason for rejection"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
            <button
              className="btn btn-warning btn-sm"
              onClick={handleReject}
              disabled={loading || reason.trim() === ""}
            >
              Submit Rejection
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MeetingRequestItem;
*/
import React, { useState } from "react";
import API from "../services/api";

const MeetingRequestItem = ({ request, onAction }) => {
  const [showReason, setShowReason] = useState(false);
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAccept = async () => {
    setLoading(true);
    await API.post("/meeting/approve", {
      requestId: request._id,
      status: "accepted",
    });
    onAction();
  };

  const handleReject = async () => {
    setLoading(true);
    await API.post("/meeting/approve", {
      requestId: request._id,
      status: "rejected",
      reason,
    });
    onAction();
  };

  return (
    <div className="card shadow-sm p-3">
      <div className="card-body">
        <h5 className="card-title">{request.studentId.name}</h5>
        <p className="mb-1">📨 <strong>Message:</strong> {request.message}</p>
        <p className="text-muted" style={{ fontSize: "0.9rem" }}>
          ⏱️ Requested on {new Date(request.createdAt).toLocaleString()}
        </p>

        {!showReason ? (
          <div className="d-flex flex-wrap gap-2 mt-2">
            <button
              className="btn btn-success btn-sm"
              onClick={handleAccept}
              disabled={loading}
            >
              ✅ Accept
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => setShowReason(true)}
              disabled={loading}
            >
              ❌ Reject
            </button>
          </div>
        ) : (
          <div className="mt-3">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Reason for rejection"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
            <button
              className="btn btn-warning btn-sm"
              onClick={handleReject}
              disabled={loading || reason.trim() === ""}
            >
              🚫 Submit Rejection
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MeetingRequestItem;
