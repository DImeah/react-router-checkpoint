import React from "react";
import { Routes, Route } from "react-router-dom";
import MoviePageLayout from "./moviePlace/MoviePageLayout";
import MovieDescription from "./moviePlace/MovieDescription";
import MovieplaceLayout from "./moviePlace/MovieplaceLayout";
import MoviePlace from "./moviePlace/MoviePlace";
import Home from "./moviePlace/Home";
import Subscribe from "./moviePlace/Subscribe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MoviePageLayout />}>
        <Route index element={<MoviePlace />} />
        {/* <Route index element={<MoviePlace />} /> */}
        <Route path=":movieId" element={<MovieDescription />} />
        {/* <Route path="/movieplace" element={<MovieplaceLayout />}></Route> */}
        <Route path="/subscribe" element={<Subscribe />} />
      </Route>
    </Routes>
  );
}

export default App;
