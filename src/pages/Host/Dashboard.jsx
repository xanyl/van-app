import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <h1>Host Dashboard</h1>
      <Outlet />
    </>
  );
}
