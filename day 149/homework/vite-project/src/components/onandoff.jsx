import React, { useState } from "react";

function Onandoff() {
  const [featureA, setFeatureA] = useState(false);
  const [featureB, setFeatureB] = useState(false);

  return (
    <div>
      <button onClick={() => setFeatureA(!featureA)}>
        Feature A: {featureA ? "ON" : "OFF"}
      </button>
      <button onClick={() => setFeatureB(!featureB)}>
        Feature B: {featureB ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default Onandoff;
