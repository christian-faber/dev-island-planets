// import { useState } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
// import { useParams } from "react-router-dom";

export const Navbar = (setView) => {
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
      <div className="brgr-box">
        <Menu />
      </div>
      <div className="btn-mbl">
        <button onClick={() => setView("overview")}>
          <span>01</span>Overview
        </button>
        <button onClick={() => setView("structure")}>
          <span>02</span>Internal Structure
        </button>
        <button onClick={() => setView("geology")}>
          <span>03</span>Surface Geology
        </button>
      </div>
    </div>
  );
};
