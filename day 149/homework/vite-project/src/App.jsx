import React from "react";
import Onandoff from "./components/onandoff";
import Score from "./components/points";
import Switcher from "./components/switcher";


function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React useState პროექტები</h1>

      <h2>1. ფუნქციების ჩართვა/გამორთვა</h2>
      <Onandoff />

      <h2>2. თამაში ქულებით</h2>
      <Score />

      <h2>3. პროფილის გადართვა</h2>
      <Switcher />
    </div>
  );
}

export default App;