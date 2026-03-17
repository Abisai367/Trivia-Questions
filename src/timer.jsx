import React, { useState, useEffect } from "react";

function MyTimer() {
  const [startTime] = useState(new Date());
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now - startTime;
      setElapsedTime(diff);
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);

return (
  <div
    style={{
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "flex-end",
      backgroundColor: "transparent",
      padding: 0,
      borderRadius: 10,
      fontSize: 30,
      margin: 0,
    }}
  >
    <div
      style={{
        fontFamily: "monospace",
        display: "inline-block",
        backgroundColor: "white",
        border: "none",
        boxShadow: "0 0 5px grey",
        padding: "0px 10px",
        borderRadius: 15,
      }}
    >
      {minutes < 10 ? "0" : ""}
      {minutes}:{seconds < 10 ? "0" : ""}
      {seconds}
    </div>
  </div>
    );}


export default MyTimer;