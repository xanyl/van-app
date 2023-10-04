import { Link, NavLink } from "react-router-dom";
import imageUrl from "/src/assets/user.png"

export default function Headers() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <header>
      <Link className="site-logo" to="/">
        #Jeep Hire
      </Link>
      <nav>
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Vans
        </NavLink>

        <Link to="login" className="login-link">
          <img height={30} src={imageUrl} className="login-icon" />
        </Link>
      </nav>
    </header>
  );
}
