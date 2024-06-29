import React from "react";
import StatLeaders from "./StatLeaders";

function PitchingStatLeaders({ data }) {
  return (
    <div style={{ display: "flex" }}>
      <StatLeaders data={data["ERA"]} statName={"ERA"} />
      <div style={{ margin: `5px` }}></div>
      <StatLeaders data={data["K"]} statName={"K"} />
      <div style={{ margin: `5px` }}></div>
      <StatLeaders data={data["WHIP"]} statName={"WHIP"} />
    </div>
  );
}

export default PitchingStatLeaders;
