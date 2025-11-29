import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/api/debug", (req, res) => {
  res.json({ message: "Backend is working!" });
});

app.post("/api/debug", (req, res) => {
  const { code } = req.body;
  try {
    // Very basic eval for testing (never use in production!)
    let output;
    try {
      output = eval(code);
    } catch (err) {
      output = err.toString();
    }
    res.json({ output });
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

app.listen(8000, () => console.log("Server running on port 8000"));
