import { useEffect, useState } from "react";
import { useParams } from  "react-router-dom";

export default function VanDetail() {
  const [vanDetail, setVanDetail] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Check the data received
        setVanDetail(data.vans);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="van-detail-container">
      {console.log(vanDetail)}
      {vanDetail ? (
        <div className="van-detail">
          <img src={vanDetail.imageUrl} alt={vanDetail.name} />
          <i className={`van-type ${vanDetail.type} selected`}>{vanDetail.type}</i>
          <h2>{vanDetail.name}</h2>
          <p className="van-price">
            <span>${vanDetail.price}</span>/day
          </p>
          <p>{vanDetail.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
