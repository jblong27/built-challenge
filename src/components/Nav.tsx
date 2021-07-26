import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <ul className="navbar">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Grid Page
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/collateral">
            Collateral
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/loans">
            Loans
          </Link>
        </li>
      </ul>
    </>
  );
};
