import { Outlet } from "react-router-dom";
import Headers from "./Headers";
import Footer from "./Footer";
export default function Layout() {
  return (
    <>
      <Headers />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
