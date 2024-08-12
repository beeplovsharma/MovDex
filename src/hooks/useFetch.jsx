import { useEffect, useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
});

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setError(false);
        setLoading(true);
        const res = await api.get(url, {
          headers: {
            Authorization: `bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
          },
        });
        setData(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    })();
  }, [url]);

  return [data, loading, error];
};

export default useFetch;
