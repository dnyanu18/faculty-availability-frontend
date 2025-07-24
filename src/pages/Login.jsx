import React, { useState } from "react";
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
