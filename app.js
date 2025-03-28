const express = require("express");
const app = express()
const cors = require("cors")
const port = 3000;
const serverError = require("./middlewares/serverError")
const error404 = require("./middlewares/error_404")


//import postsRouter

const postsRouter = require("./routers/postsRouter")

app.use(cors({
  origin: 'http://localhost:5175'
}));

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

app.use(serverError)

app.use(error404)