// import { useState } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { planetData } from "./planet-data";
//

export const Info = ({ planet, view }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    const data = planetData.find((obj) => {
      return obj.name === planet.name;
    });
    setText(data?.[view].content);
  }, [view, planet]);

  console.log(view, planet);
  return (
    <div className="info">
      <h1 className="name">{planet.name}</h1>
      <div className="text">{text}</div>
    </div>
  );
};
