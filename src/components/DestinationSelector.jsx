function DestinationSelector({ tours, selected, setSelected }) {
    // Extract unique names from the tour list
    const uniqueDestinations = [
      "All Destinations",
      ...new Set(tours.map((tour) => tour.name)),
    ];
  
    return (
      <div className="selector">
        <label htmlFor="destination">Choose a destination: </label>
        <select
          id="destination"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          {uniqueDestinations.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
    );
  }
  
  export default DestinationSelector;
  