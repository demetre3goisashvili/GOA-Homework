import React, { useState } from "react";

function Score() {
  const [score, setScore] = useState(0);

  return (
    <div>
      <h2>Score: {score}</h2>
      <button onClick={() => setScore(score + 1)}>Add Point</button>
      <button onClick={() => setScore(0)}>Reset</button>
    </div>
  );
}

export default Score;