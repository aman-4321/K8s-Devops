const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
  origin: ['http://localhost:3000', 'https://k8.webprojects.live'],
  methods: ['GET'],
  credentials: true
}));

app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store');
  next();
});

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

app.get("/api", (req, res) => {
  console.log("API request received", {
    headers: req.headers,
    url: req.url
  });
  
  res.json({ 
    message: "Hello from Kubernetes!",
    timestamp: new Date().toISOString()
  });
});

app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({ message: "Internal server error" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
