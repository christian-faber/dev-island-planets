import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navbar } from "./Navbar.js";
import { Content } from "./Content.js";
import { Stats } from "./Stats.js";
// import { Button } from "./Button.js";

export const Planet = () => {
  const { planetName } = useParams();
  const [planet, setPlanet] = useState([]);

  useEffect(() => {
    fetch(`https://api.api-ninjas.com/v1/planets?name=${planetName}`, {
      headers: {
        "X-Api-Key": "tiqQtd5+jNWhIQJ672wvJw==pJtqcm61TJUGSkIj",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setPlanet(data[0]))
      .catch((err) => console.error(err));
  }, [planetName]);

  return (
    <div className="planet">
      <Navbar planet={planet} setPlanet={setPlanet} />
      <Content planet={planet} />
      <Stats className="stat" planet={planet} />
    </div>
  );
};
