/*import React, { useEffect, useState } from "react";
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
      <h2 className="text-center mb-4">🎓 Student Dashboard</h2>

      {teachers.length === 0 ? (
        <div className="alert alert-info text-center">No teachers found</div>
      ) : (
        <div className="row">
          {teachers.map((t) => (
            <div className="col-md-6 col-lg-4 mb-4" key={t.teacherId._id}>
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <TeacherStatusCard teacher={t.teacherId} status={t.availability} />
                  <MeetingRequestForm teacherId={t.teacherId._id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
*/
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
    <div className="container py-4">
      <h2 className="text-center mb-4">🎓 Student Dashboard</h2>

      {teachers.length === 0 ? (
        <div className="alert alert-info text-center">No teachers found</div>
      ) : (
        <div className="row">
          {teachers.map((t) => (
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4" key={t.teacherId._id}>
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <TeacherStatusCard teacher={t.teacherId} status={t.availability} />
                  <MeetingRequestForm teacherId={t.teacherId._id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
