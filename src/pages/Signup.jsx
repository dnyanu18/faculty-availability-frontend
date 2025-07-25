/*import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "student" });
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await API.post("/auth/register", form);
      alert("Signup successful");
      navigate("/");
    } catch {
      alert("Signup failed");
    }
  };

  return (
    <div className="container mt-5 col-md-4">
      <h3>Signup</h3>
      <input className="form-control my-2" placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input className="form-control my-2" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input className="form-control my-2" type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <select className="form-control my-2" onChange={(e) => setForm({ ...form, role: e.target.value })}>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>
      <button className="btn btn-primary" onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
*/
import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await API.post("/auth/register", form);
      alert("Signup successful");
      navigate("/");
    } catch {
      alert("Signup failed");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card p-4 shadow-sm w-100" style={{ maxWidth: "400px" }}>
        <h3 className="text-center mb-3">Signup</h3>
        <input
          className="form-control mb-3"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="form-control mb-3"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="form-control mb-3"
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <select
          className="form-control mb-3"
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
        <button className="btn btn-success w-100" onClick={handleSignup}>
          Signup
        </button>
        <p className="text-center mt-2 mb-0">
          Already have an account? <a href="/">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
