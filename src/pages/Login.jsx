/*import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        const res = await API.post("/login", { email, password });
        localStorage.setItem("token", res.data.token);
        if (res.data.role === "Teacher") navigate("/teacher");
        else navigate("/student");
    };

    return (
        <div>
            <h2>Login</h2>
            <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
*/
import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);
      if (res.data.user.role === "teacher") navigate("/teacher");
      else navigate("/student");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="container mt-5 col-md-4">
      <h3>Login</h3>
      <input className="form-control my-2" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input className="form-control my-2" type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
      <p className="mt-2">Don't have an account? <a href="/signup">Signup</a></p>
    </div>
  );
};

export default Login;
