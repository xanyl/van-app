import { NavLink, Outlet } from "react-router-dom";
export default function HostVanLayout() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "orange",
  };
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="."
          end // this is the same as exact={true}
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Details
        </NavLink>

        <NavLink
          to="price"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Pricing
        </NavLink>
        <NavLink
          to="photo"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Photos
        </NavLink>
      </nav>
        <Outlet />
    </>
  );
}
