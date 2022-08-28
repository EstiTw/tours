import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, onDelete, onRefresh }) => {
  return (
    <>
      <section>
        <h2 className="title">
          {tours.length ? " Our Tours" : " No Tours Left"}
        </h2>
        {tours.length ? (
          <p className="underline" />
        ) : (
          <div className="title">
            <button className="btn title" onClick={() => onRefresh()}>
              Refresh
            </button>
          </div>
        )}

        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} onDelete={onDelete} />
        ))}
      </section>
    </>
  );
};

export default Tours;
