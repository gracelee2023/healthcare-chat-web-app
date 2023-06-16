const Star = ({ marked, starId }) => {
  return (
    <span star-id={starId} style={{ color: "#ff9933" }} role="button">
      {/* empty star，real star */}
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
};

export default Star;
