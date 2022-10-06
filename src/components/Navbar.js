import { useState } from "react";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import { Button } from "./Button";
// import { Button } from "./Button";
// import { useParams } from "react-router-dom";

export const Navbar = ({ setView }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="navBar">
      <div className="nav">
        <h2 className="title">THE PLANETS</h2>
        <div className="nav-links">
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
        <div className="hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} />
          {isOpen && (
            <div className="mbl-nav">
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
          )}
        </div>
      </div>
      <div className="btn-mbl">
        <Button setView={setView} />
      </div>
    </div>
  );
};
