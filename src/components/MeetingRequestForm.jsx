import React, { useState } from "react";
import API from "../services/api";

const MeetingRequestForm = ({ teacherId }) => {
  const [message, setMessage] = useState("");

  const sendRequest = async () => {
    try {
      await API.post("/meeting/send", { teacherId, message });
      alert("Request sent");
      setMessage("");
    } catch {
      alert("Failed to send request");
    }
  };

  return (
    <div className="mb-4">
      <textarea
        className="form-control"
        placeholder="Write your request..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button className="btn btn-primary mt-2" onClick={sendRequest}>Send Request</button>
    </div>
  );
};

export default MeetingRequestForm;
