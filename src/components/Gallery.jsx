import { useEffect, useState } from "react";
import TourCard from "./TourCard";

const url = "https://course-api.com/react-tours-project";

function Gallery({ tours, setTours, onRemove }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("Fetched tours:", data); // Add this
      setTours(data);
      setLoading(false);
    } catch (err) {
      console.error("Fetch error:", err); // Add this
      setError(true);
      setLoading(false);
    }
  };  

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error fetching data.</h2>;
  if (tours.length === 0) return <h2>No Tours Left</h2>;

  return (
    <section className="gallery">
      {tours.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={onRemove} />
      ))}
    </section>
  );
}

export default Gallery;
