import { useState, useEffect } from "react";
import Gallery from "./components/Gallery";
import DestinationSelector from "./components/DestinationSelector";
import "./styles/styles.css";

// API URL
const API_URL = "https://course-api.com/react-tours-project";

function App() {
  // State variables
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState("All Destinations");

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setTours(data);
      setError(null);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to fetch tours.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch on first render
  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  // Render app
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
