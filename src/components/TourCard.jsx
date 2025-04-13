import { useState } from "react";

function TourCard({ id, name, info, price, image, onRemove }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="card">
      <img src={image} alt={name} />
      <div className="card-content">
        <h2>{name}</h2>
        <h4>${price}</h4>
        <p>
          {readMore ? info : `${info.substring(0, 100)}...`}
          <button className="read-more" onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button className="btn-remove" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </article>
  );
}

export default TourCard;
