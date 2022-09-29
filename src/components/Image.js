// import { useState } from "react";

export const Image = ({ planet, view }) => {
  if (view === "overview") {
    return (
      <div>
        <img
          src={`/assets/planet-${planet.name}.svg`}
          alt={`${planet.name}`}
          className="img"
        />
      </div>
    );
  }

  if (view === "structure") {
    return (
      <div>
        <img
          src={`/assets/planet-${planet.name}-internal.svg`}
          alt={`${planet.name}-int`}
          className="img"
        />
      </div>
    );
  }
  if (view === "geology") {
    return (
      <div>
        <img
          className="img-planet"
          src={`/assets/planet-${planet.name}.svg`}
          alt={`${planet.name}`}
        />

        <img
          className="img-surface"
          src={`/assets/geology-${planet.name}.png`}
          alt={`-`}
        />
      </div>
    );
  }
};
