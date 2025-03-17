const express = require("express");
const app = express()
const port = 3000;


//import postsRouter

const postsRouter = require("./routers/postsRouter")

app.use(express.static("public"))

// body parser for "application/json"
app.use(express.json())

app.listen(port, () => {
  console.log(`Server currently up and running on port: http://localhost:${port}`);
})

app.get("/", (req, res) => {

  res.send("Welcome to our server")

})

// middleware to use postsRouter

app.use("/api/v1/posts", postsRouter)

