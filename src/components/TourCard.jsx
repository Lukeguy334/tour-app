function TourCard({ id, name, info, image, price, onRemove }) {
  return (
    <div className="tour-card">
      <img src={image} alt={name} />
      <div className="tour-info">
        <h2>{name}</h2>
        <h3>${price}</h3>
        <p>{info}</p>
        <button onClick={() => onRemove(id)}>Not Interested</button>
      </div>
    </div>
  );
}

export default TourCard;
