
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
