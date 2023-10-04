import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import getVans from "../../api";

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [searchParam, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const typeFilter = searchParam.get("type");
  // console.log(searchParam.toString());
  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try{
        const response = await getVans();
        setVans(response);
      }catch(error){

  
        setError(error);
      }
      finally{
        setLoading(false);
      }
      setLoading(false);
    }
    loadVans();
  }, []);

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = displayedVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link
        to={van.id}
        state={{
          search: `?${searchParam.toString()}`,
          type: typeFilter,
        }}
      >
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return (
    <div className="van-list-container">
      <h1>Explore Our Vans Options</h1>
      <div className="van-list-filter-buttons">
        {/* <Link to="?type=simple" className="van-type simple">
          Simple
        </Link>
        <Link to="?type=luxury" className="van-type luxury">
          Luxury
        </Link>
        <Link to="?type=rugged" className="van-type rugged">
          Rugged
        </Link>
        <Link to="." className="van-type clear-filters">
          Clear filter
        </Link> */}

        {/* <button
          onClick={() => setSearchParams("?type=simple")}
          className="van-type simple"
        >
          Simple
        </button>
        <button
          onClick={() => setSearchParams("?type=luxury")}
          className="van-type luxury"
        >
          Luxury
        </button>
        <button
          onClick={() => setSearchParams("?type=rugged")}
          className="van-type rugged"
        >
          Rugged
        </button>
        <button
          onClick={() => setSearchParams("")}
          className="van-type clear-filters"
        >
          Clear filter
        </button> */}

        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`van-type simple ${
            typeFilter === "simple" ? "selected" : ""
          }`}
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={`van-type luxury ${
            typeFilter === "luxury" ? "selected" : ""
          }`}
        >
          Luxury
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className={`van-type rugged ${
            typeFilter === "rugged" ? "selected" : ""
          }`}
        >
          Rugged
        </button>
        {typeFilter ? (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="van-type clear-filters"
          >
            Clear filter
          </button>
        ) : null}
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
