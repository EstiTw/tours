import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const getData = async () => {
    const resp = await fetch(url);
    if (resp.status <= 299 && resp.status >= 200) {
      const tours = await resp.json();
      setIsLoading(false);
      setTours(tours);
    } else {
      setIsLoading(false);
    }
  };

  const handleDelete = (id) => {
    const filtered = tours.filter((tour) => tour.id !== id);
    setTours(filtered);
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setTours([]);
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading)
    return (
      <main>
        <section className="loading">
          <Loading />
        </section>
      </main>
    );

  return (
    <main>
      <Tours tours={tours} onDelete={handleDelete} onRefresh={handleRefresh} />
    </main>
  );
}

export default App;
