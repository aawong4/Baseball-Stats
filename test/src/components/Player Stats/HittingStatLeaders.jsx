import React from "react";
import StatLeaders from "./StatLeaders";

function HittingStatLeaders({ data }) {
  return (
    <div style={{ display: "flex" }}>
      <StatLeaders data={data["BA"]} statName={"BA"} />
      <div style={{ margin: `5px` }}></div>
      <StatLeaders data={data["OPS"]} statName={"OPS"} />
      <div style={{ margin: `5px` }}></div>
      <StatLeaders data={data["HR"]} statName={"HR"} />
    </div>
  );
}

export default HittingStatLeaders;
