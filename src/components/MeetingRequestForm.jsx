/*import React, { useState } from "react";
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
*/
import React, { useState } from "react";
import API from "../services/api";

const MeetingRequestForm = ({ teacherId }) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendRequest = async () => {
    if (!message.trim()) {
      alert("Please enter a message.");
      return;
    }

    try {
      setLoading(true);
      await API.post("/meeting/send", { teacherId, message });
      alert("Meeting request sent successfully!");
      setMessage("");
    } catch (err) {
      alert("Failed to send the request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-3">
      <textarea
        className="form-control"
        placeholder="✍️ Write your meeting request..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={3}
      />
      <button
        className="btn btn-outline-primary mt-2 w-100"
        onClick={sendRequest}
        disabled={loading}
      >
        📩 {loading ? "Sending..." : "Send Request"}
      </button>
    </div>
  );
};

export default MeetingRequestForm;
