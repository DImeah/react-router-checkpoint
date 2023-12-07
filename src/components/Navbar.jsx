import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  // Navbar here ===========================================================================
  return (
    <nav className="shadow-md mb-5 p-3 m-2 bg-blue-950 sticky top-0 left-0 right-0 z-10">
      <div className=" flex justify-between items-center max-w-5xl mx-auto px-2">
        <div className="flex items-center justify-start gap-2">
          {/* Brand logo here============================================= */}
          <img
            src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L2pvYjE4OTVkZXNpZ24tb25vZmZpY29ubWF4aW1pemUtcGwtZWxlbWVudC0wMDMtYS5wbmc.png"
            alt="brand logo"
            className="w-20"
          />
          <h2 className="tracking-wide text-4xl text-gray-100 italic font-bold">
            Movie app
          </h2>
        </div>
        <div className="flex gap-4 text-xl italic font-bold ">
          <NavLink className=" text-gray-100" to="/">
            Movieplace
          </NavLink>
          <NavLink className=" text-gray-100" to="/about">
            Subscribe
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
