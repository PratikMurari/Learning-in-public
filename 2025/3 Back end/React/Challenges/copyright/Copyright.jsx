import React from "react";

function Copyright() {
  const year = new Date().getFullYear();
  return (
    <p style={{ textAlign: "center", fontSize: "1 em", color: "#5A584E" }}>
      &copy; {year} All rights reserved by FurtherAI Inc.
    </p>
  );
}

export default Copyright;
