const HotelSelector = ({ value, onChange, hotels = [] }) => (
  <div className="mb-3">
    <label htmlFor="hotel" className="form-label">Select Hotel</label>
    <select
      id="hotel"
      name="hotel"
      className="form-control"
      value={value}
      onChange={onChange}
      required
    >
      <option value="">Select a hotel</option>
      {hotels.map((hotel, idx) => (
        <option key={idx} value={hotel}>{hotel}</option>
      ))}
    </select>
  </div>
);

export default HotelSelector;