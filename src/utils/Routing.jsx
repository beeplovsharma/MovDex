import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Explore from "../pages/Explore";
import NotFound from "../pages/NotFound";
import SearchResult from "../pages/SearchResult";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:mediaType/:id" element={<Details />} />
      <Route path="/search/:query" element={<SearchResult />} />
      <Route path="/explore/:mediaType" element={<Explore />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Routing;
