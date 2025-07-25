import React, { useEffect, useState } from "react";
import API from "../services/api";
import TeacherStatusCard from "../components/TeacherStatusCard";
import MeetingRequestForm from "../components/MeetingRequestForm";

const StudentDashboard = () => {
  const [teachers, setTeachers] = useState([]);

  const loadStatuses = async () => {
    const res = await API.get("/status/all");
    setTeachers(res.data);
  };

  useEffect(() => {
    loadStatuses();
  }, []);

  return (
    <div className="container mt-4">
      <h3>Student Dashboard</h3>
      <div className="row">
        {teachers.map((t) => (
          <div className="col-md-6" key={t.teacherId._id}>
            <TeacherStatusCard teacher={t.teacherId} status={t.availability} />
            <MeetingRequestForm teacherId={t.teacherId._id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
