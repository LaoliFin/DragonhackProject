const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const cors = require("cors");

// Tukaj dovolimo, da se REST servisi kličejo iz katerega koli računalnika "*"
// Če želimo varnost, potem v origin napišemo IP ali DN od strežnika, kjer se nahaja FrontEnd app.
app.use(cors( {
    origin: '*', // Allow requests from all origins
    methods: 'GET, POST, PUT, DELETE', // Allow all HTTP methods
    headers: 'Content-Type, Accept, Authorization', // Allow specific headers
  }));

app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError")
      res.status(401).json({ message: err.message });
  });

const port = process.env.PORT || 3000;

// REST API
// Router for all REST API urls '*'
app.use(express.static(path.join(__dirname, "angular", "build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "angular", "build", "index.html"));
  });
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(
        `Demo app started in ${
            process.env.NODE_ENV || "development"
        } mode listening on port ${port}!`
    );
});

module.exports = app;