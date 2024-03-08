import React from "react";
import { Card } from "../Card";

const Cards = () => {
  return (
    <div>
      <div className="flex justify-between w-5/6 mx-auto">
        <Card text="Export & Import" icon="png" />
        <Card text="General Order" icon="png" />
        <Card text="Manpower" icon="png" />
      </div>
      <div className="flex justify-between w-5/6 mx-auto">
        <Card text="Interior Design" icon="png" />
        <Card text="Maintenance" icon="png" />
        <Card text="Solar Energy" icon="png" />
      </div>
    </div>
  );
};

export { Cards };
