// import { useState } from "react";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navBar">
      <h2 className="title">THE PLANETS</h2>
      <div className="nav">
        <Link to="/mercury">MERCURY</Link>
        <Link to="/venus">VENUS</Link>
        <Link to="/earth">EARTH</Link>
        <Link to="/mars">MARS</Link>
        <Link to="/jupiter">JUPITER</Link>
        <Link to="/saturn">SATURN</Link>
        <Link to="/uranus">URANUS</Link>
        <Link to="/neptune">NEPTUNE</Link>
        <Link to="/pluto">PLUTO</Link>
      </div>
    </div>
  );
};
