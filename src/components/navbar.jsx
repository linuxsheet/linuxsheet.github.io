import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="site-map">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/commands"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Command Quick Referance
      </NavLink>
      <NavLink
        to="/distros"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Distros
      </NavLink>
      <NavLink
        to="/filesystem"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        System Folders
      </NavLink>
    </nav>
  );
}

export default Navbar;
