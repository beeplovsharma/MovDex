import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
});

export const fetchDataFromApi = async (url) => {
  try {
    const {data} = await api.get(url, {
      headers: {
        Authorization: `bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
