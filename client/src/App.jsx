import React, { useState } from "react";
import "./styles.css";

function App() {
  const [code, setCode] = useState("console.log('Hello, world!');");
  const [result, setResult] = useState("");

  const runCode = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/debug", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();
      setResult(data.output || data.error);
    } catch (err) {
      setResult("Error connecting to backend.");
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Code Debugging Assistant</h1>
      </header>

      <main>
        <section className="editor-section">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="code-editor"
            placeholder="Write your JavaScript code here..."
          />
          <button onClick={runCode} className="run-button">
            Run Code
          </button>
        </section>

        <section className="result-section">
          <h2>Results</h2>
          <pre className="result-output">{result}</pre>
        </section>
      </main>
    </div>
  );
}

export default App;
