import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

// MoviePageLayout component serves as a layout for movie-related pages
const MoviePageLayout = () => {
  return (
    <div>
      {/* Render the Navbar component for navigation */}
      <Navbar />
      {/* Outlet renders the nested routes/components for this layout */}
      <Outlet />
    </div>
  );
};

export default MoviePageLayout;
