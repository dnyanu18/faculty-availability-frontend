/*import { useState } from "react";
import API from "../services/api";
import MeetingRequestsList from "../components/MeetingRequestsList";

const TeacherDashboard = () => {
  const [availability, setAvailability] = useState("available");

  const updateStatus = async () => {
    await API.post("/status/update", { availability });
    alert("Status updated");
  };

  return (
    <div className="container mt-4">
      <h3>Teacher Dashboard</h3>
      <div className="my-3">
        <label className="form-label">Set Your Availability</label>
        <select className="form-control" value={availability} onChange={(e) => setAvailability(e.target.value)}>
          <option value="available">Available</option>
          <option value="busy">Busy</option>
        </select>
        <button className="btn btn-success mt-2" onClick={updateStatus}>Update</button>
      </div>
      <hr />
      <MeetingRequestsList />
    </div>
  );
};

export default TeacherDashboard;

import { useState } from "react";
import API from "../services/api";
import MeetingRequestsList from "../components/MeetingRequestsList";

const TeacherDashboard = () => {
  const [availability, setAvailability] = useState("available");

  const updateStatus = async () => {
    await API.post("/status/update", { availability });
    alert("Your status has been updated!");
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">🧑‍🏫 Teacher Dashboard</h2>

      <div className="card shadow-sm p-4 mb-4">
        <h5 className="mb-3">🔄 Update Your Availability</h5>
        <div className="row">
          <div className="col-md-6">
            <select
              className="form-select"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
            >
              <option value="available">✅ Available</option>
              <option value="busy">⛔ Busy</option>
            </select>
          </div>
          <div className="col-md-6">
            <button className="btn btn-success w-100" onClick={updateStatus}>
              Update Status
            </button>
          </div>
        </div>
      </div>

      <MeetingRequestsList />
    </div>
  );
};

export default TeacherDashboard;

*/
import { useState } from "react";
import API from "../services/api";
import MeetingRequestsList from "../components/MeetingRequestsList";

const TeacherDashboard = () => {
  const [availability, setAvailability] = useState("available");

  const updateStatus = async () => {
    await API.post("/status/update", { availability });
    alert("Your status has been updated!");
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">🧑‍🏫 Teacher Dashboard</h2>

      <div className="card shadow-sm p-4 mb-4">
        <h5 className="mb-3">🔄 Update Your Availability</h5>
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <select
              className="form-select"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
            >
              <option value="available">✅ Available</option>
              <option value="busy">⛔ Busy</option>
            </select>
          </div>
          <div className="col-12 col-md-6">
            <button className="btn btn-success w-100" onClick={updateStatus}>
              Update Status
            </button>
          </div>
        </div>
      </div>

      <MeetingRequestsList />
    </div>
  );
};

export default TeacherDashboard;
