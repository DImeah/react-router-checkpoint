import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ myMovies }) => {
  // Movies from are map here and pass to MovieCard as props=====================================
  return (
    <div className="max-w-5xl mx-auto ">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-4">
        {myMovies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
  // ===================================================================================
};

export default MovieList;
