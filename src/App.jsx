import { useEffect, useState } from "react";
import "./App.css";
import { fetchDataFromApi } from "./utils/FetchDataFromAPI";
import useHomeStore from "./store/homeStore";
import useFetch from "./hooks/useFetch";
import HeroBanner from "./components/HeroBanner";
import Routing from "./utils/Routing";

function App() {
  const { urls, genres, addMovies, addGenres } = useHomeStore();
  const [data] = useFetch("/configuration");

  useEffect(() => {
    if (Object.keys(data).length) {
      const url = {
        backdrop: data.images.base_url + "original",
        poster: data.images.base_url + "original",
        profile: data.images.base_url + "original",
      };
      addMovies(url);
    }
  }, [data]);

  useEffect(() => {
    genresCall();
  }, [])
  

  const genresCall = async() => {
    let promises = [];
    let endPoints = ["tv","movie"];
    let allGenres = {};
    endPoints.forEach((endPoint)=>{
      promises.push(fetchDataFromApi(`/genre/${endPoint}/list`));
    })
    let allPromises = await Promise.all(promises);
    allPromises.map(({genres})=>(
      genres.map((item)=>allGenres[item.id]=item.name)
    ))
    addGenres(allGenres);
  };

  return (
    <>
      <div className="">
        <Routing />
      </div>
    </>
  );
}

export default App;
