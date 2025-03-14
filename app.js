const express = require("express");
const app = express()
const port = 3000;

app.listen(port, () => {
  console.log(`Server currently up and running on port: http://localhost:${port}`);
})

app.get("/", (req, res) => {

  res.send("Welcome to our server")

})

