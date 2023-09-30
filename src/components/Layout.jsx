
import { Outlet } from "react-router-dom"
import Headers from "./Headers"
export default function Layout() {
  return (
    <>
    <Headers />
    <Outlet />
    </>
  )
}
