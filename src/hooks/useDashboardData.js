import { useState, useEffect } from "react";


const useDashboardData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://vindev.cx.ua/dashboard")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  return { data, error, loading };
};

export default useDashboardData;
