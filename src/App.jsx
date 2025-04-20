import { useState, useEffect } from "react";
import Gallery from "./components/Gallery";
import DestinationSelector from "./components/DestinationSelector";
import "./styles/styles.css";
import mockTours from "./data/tours.json"; // ✅ Import local tour data

function App() {
  // State variables
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState("All Destinations");

  // Use local data instead of external fetch
  const fetchTours = async () => {
    setLoading(true);
    try {
      // Simulate loading delay
      await new Promise((res) => setTimeout(res, 500));
      setTours(mockTours);
      setError(null);
    } catch (err) {
      console.error("Mock fetch error:", err);
      setError("Failed to load tours.");
    } finally {
      setLoading(false);
    }
  };

  // Load data on first render
  useEffect(() => {
    fetchTours();
  }, []);

  // Remove tour by ID
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
