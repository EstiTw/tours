import React, { useState } from "react";

const Tour = ({ tour, onDelete }) => {
  const { id, name, image, info, price } = tour;
  const [showMore, setShowMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <button>
            <h4 className="tour-price">$ {price}</h4>
          </button>
        </div>
        <p>
          {showMore ? info : info.substring(1, 200) + "..."}
          <button onClick={() => setShowMore(!showMore)}>
            Show {showMore ? "Less" : "More"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => onDelete(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
