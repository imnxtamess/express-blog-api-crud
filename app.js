const express = require("express");
const app = express()
const port = 3000;

//import postsRouter

const postsRouter = require("./routers/postsRouter")

app.listen(port, () => {
  console.log(`Server currently up and running on port: http://localhost:${port}`);
})

app.get("/", (req, res) => {

  res.send("Welcome to our server")

})

// middleware to use postsRouter

app.use("/api/v1/posts", postsRouter)

