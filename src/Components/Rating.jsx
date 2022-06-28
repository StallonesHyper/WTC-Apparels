import React from "react";

function Rating({ value, numOf, color }) {
  return (
    <div className="Rating">
      <span>
        <i
          style={{ color }}
          className={
            value >= 1
              ? "fas fa-star"
              : value >= 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
    </div>
  );
}

export default Rating;

// NOTE: Keep Rating Component Pending
