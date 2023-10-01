import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

export default function HostVanDetail() {
  const [currentVan, setCurrentVan] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  });

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "orange",
  };
  return (
    <section>
      {/* <Link to="../vans" className="back-button"> */}
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>
        <nav className="host-van-detail-nav">
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
        <Outlet context={{ currentVan }}/>
      </div>
    </section>
  );
}
