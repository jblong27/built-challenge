import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <ul className="navbar">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Collateral
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Loans
          </Link>
        </li>
      </ul>
    </>
  );
};
