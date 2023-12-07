import React from "react";
import { useParams } from "react-router-dom";
import { movies } from "../data";
import { NavLink } from "react-router-dom";
import { Button } from "antd";

export const MovieDescription = () => {
  // Extract movieId from the route parameters
  const { movieId } = useParams();

  // Initialize state for movie data and loading indicator
  const [movie, setMovie] = React.useState(null); // Initialize as null
  const [loading, setLoading] = React.useState(true);

  // Function to find a movie by its ID
  const findMovieById = () => {
    let foundMovie = movies.find((item) => item.id === movieId);
    setMovie(foundMovie);
    return foundMovie;
  };

  // Effect to run when movieId changes
  React.useEffect(() => {
    // Fetch movie data
    findMovieById();

    // Simulate loading by setting a timeout
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, [movieId]); // Add movieId as a dependency

  // Loading state: Display loading message if data is still loading or no movie found
  if (loading || !movie) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1>Loading Trailer...</h1>
      </div>
    );
  }

  // Render movie details and suggestions
  return (
    <div className=" ">
      {/* Navigation link to Movie Place */}
      <div className="font-bold max-w-5xl mx-auto">
        <NavLink to="/">
          <Button className=" font-bold shadow-md bg-gray-300">
            Back to Movie place
          </Button>
        </NavLink>
      </div>

      {/* Movie Trailer and Description section */}
      <div className="flex  max-w-5xl mx-auto mt-4">
        {/* Movie Trailer section */}
        <div className="flex flex-col p-2 shadow-lg mb-10">
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            {/* Embed movie trailer using iframe */}
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              title={movie.title}
              src={movie.movieTrailer}
              frameBorder="0"
              // Add alt text for accessibility
              // alt={`Trailer for ${movie.title}`}
            ></iframe>
          </div>
          {/* Movie details */}
          <div className=" align-middle ml-5 bg-slate-300 m-4 p-4 rounded-xl">
            <h1 className="text-3xl text-yellow-700 font-bold mt-4 text-center">
              {movie.title}
            </h1>
            <p className="text-xl text-emerald-600 italic">
              {movie.description}
            </p>
          </div>
        </div>

        {/* Movie suggestion section */}
        <div className="rounded-2xl ml-5 flex-grow top-0 left-0 w-full h-full bg-slate-300 ">
          <div className="mb-5 border-l-yellow-700 text-yellow-700 font-bold mt-4 text-center">
            <h2>Movie suggestions for You</h2>
          </div>

          <div></div>

          {/* Display a list of movie suggestions */}
          {movies.map((item) => (
            <div
              className=" text-xl text-emerald-600 italic shadow-md p-5"
              key={item.id}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;
