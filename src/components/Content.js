// import { useState } from "react";
import { useState } from "react";
import { Button } from "./Button";
import { Image } from "./Image";
import { Info } from "./Info";

export const Content = ({ planet }) => {
  const [view, setView] = useState("overview");

  return (
    <div className="content">
      <div className="frame">
        <Image planet={planet} view={view} />
      </div>
      <div className="summary">
        <Info planet={planet} view={view} />
        <Button setView={setView} />
      </div>
    </div>
  );
};
