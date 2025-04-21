
// Gallery.jsx
import TourCard from "./TourCard";

function Gallery({ tours, onRemove, loading, error, selected, fetchTours }) {
  const filteredTours =
    selected === "All Destinations"
      ? tours
      : tours.filter((tour) => tour.name === selected);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error fetching data.</h2>;

  if (filteredTours.length === 0) {
    return (
      <div className="no-tours">
        <h2>No tours left.</h2>
        <button onClick={fetchTours}>Refresh</button>
      </div>
    );
  }
/// If no tours match the selected destination
  return (
    <section className="gallery">
      {filteredTours.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={onRemove} />
      ))}
    </section>
  );
}

export default Gallery;
