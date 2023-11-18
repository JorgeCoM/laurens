import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import "./NavBarComponent.css";

export const NavBarComponent = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navigation bg-primary z-50">
      <a href="/" className="brand-name text-secundary">
        Laurens
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a
              className="text-secundary duration-300 hover:text-tersary"
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-secundary duration-300 hover:text-tersary"
              href="/about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-secundary duration-300 hover:text-tersary"
              href="/contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden md:mr-20 lg:mr-3 md:block">
        <a
          className="border-2 cursor-pointer text-secundary hover:text-tersary hover:border-tersary duration-300 border-secundary px-6 py-2"
          href="/login"
        >
          Iniciar seccion
        </a>{" "}
        <a
          className="border-2 cursor-pointer text-secundary hover:text-tersary hover:border-tersary duration-300 border-secundary px-6 py-2"
          href="/register"
        >
          Registrar
        </a>
      </div>
    </nav>
  );
};
