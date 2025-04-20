import { useState, useEffect } from "react";
import Gallery from "./components/Gallery";
import DestinationSelector from "./components/DestinationSelector";
import "./styles/styles.css";

const API_URL = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState("All Destinations");

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setTours(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch tours.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  return (
    <main>
      <h1 className="title">Our Tours</h1>
      <DestinationSelector
        tours={tours}
        selected={selected}
        setSelected={setSelected}
      />
      <Gallery
        tours={tours}
        onRemove={removeTour}
        loading={loading}
        error={error}
        selected={selected}
        fetchTours={fetchTours}
      />
    </main>
  );
}

export default App;
