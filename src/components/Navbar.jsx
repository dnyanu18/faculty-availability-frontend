/*
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <span className="navbar-brand">Faculty Availability System</span>
      {isLoggedIn && (
        <button className="btn btn-outline-light" onClick={handleLogout}>
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4 py-2 d-flex justify-content-between align-items-center">
      <span className="navbar-brand fw-bold">
        🧑‍🏫 Faculty Availability System
      </span>

      <div className="text-white fw-semibold me-auto ms-4">
        {time.toLocaleTimeString()}
      </div>

      {isLoggedIn && (
        <button className="btn btn-outline-light" onClick={handleLogout}>
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
*/
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 py-2">
      <div className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center">
        <span className="navbar-brand fs-5 text-center text-md-start">
          🧑‍🏫 Faculty Availability System
        </span>

        <div className="text-white fw-semibold mt-2 mt-md-0">
          {time.toLocaleTimeString()}
        </div>

        {isLoggedIn && (
          <button
            className="btn btn-outline-light mt-2 mt-md-0"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

