import React from "react";

export default function ResultsPane({ result }) {
  if (!result) {
    return (
      <div style={{ padding: 20, fontFamily: "Arial" }}>
        <h3>Results will appear here</h3>
      </div>
    );
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h3>Debugging Results</h3>
      <pre
        style={{
          background: "#fff",
          padding: 12,
          borderRadius: 6,
          whiteSpace: "pre-wrap",
          border: "1px solid #ddd",
        }}
      >
        {result}
      </pre>
    </div>
  );
}
