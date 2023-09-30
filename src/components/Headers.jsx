import { Link } from "react-router-dom";

export default function Headers() {
  return (
    <header>
      <Link className="site-logo" to="/">
        #Jeep Hire
      </Link>
      <nav>
        <Link to="/host">Host</Link>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
  );
}
