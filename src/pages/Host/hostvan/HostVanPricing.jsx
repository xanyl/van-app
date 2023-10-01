import { useOutletContext } from "react-router-dom";


export default function HostVanPricing() {
  const {currentVan} = useOutletContext();
  return (
    <section className="host-van-detail-info">
      <h4>
        Price: <span>${currentVan.price}/day</span>
      </h4>
    </section>
  )
}
