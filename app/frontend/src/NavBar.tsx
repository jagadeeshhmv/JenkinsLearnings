import React from "react";
import { NavLink } from "react-router-dom";

const tabClass =
  "px-4 py-2 rounded-t font-medium transition-colors duration-200 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-300";
const activeTabClass = "text-blue-700 border-blue-600 bg-blue-50";

const NavBar = () => (
  <nav className="bg-white shadow flex justify-center">
    <div className="flex gap-2 mt-2">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `${tabClass} ${isActive ? activeTabClass : "text-gray-700"}`
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/desks"
        className={({ isActive }) =>
          `${tabClass} ${isActive ? activeTabClass : "text-gray-700"}`
        }
      >
        Desks
      </NavLink>
      <NavLink
        to="/assets"
        className={({ isActive }) =>
          `${tabClass} ${isActive ? activeTabClass : "text-gray-700"}`
        }
      >
        Assets
      </NavLink>
      <NavLink
        to="/cubicles"
        className={({ isActive }) =>
          `${tabClass} ${isActive ? activeTabClass : "text-gray-700"}`
        }
      >
        Cubicles
      </NavLink>
      <NavLink
        to="/users"
        className={({ isActive }) =>
          `${tabClass} ${isActive ? activeTabClass : "text-gray-700"}`
        }
      >
        Users
      </NavLink>
    </div>
  </nav>
);

export default NavBar;
