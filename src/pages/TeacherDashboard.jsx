import { useState } from "react";
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
