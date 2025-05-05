import React, { useState } from "react";

function Switcher() {
  const [theme, setTheme] = useState("Light");

  const toggleTheme = () => {
    setTheme(theme === "Light" ? "Dark" : "Light");
  };

  return (
    <div style={{ background: theme === "Light" ? "#fff" : "#333", color: theme === "Light" ? "#000" : "#fff", padding: "20px" }}>
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>Switch Theme</button>
    </div>
  );
}

export default Switcher;