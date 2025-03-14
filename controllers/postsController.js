// import the necessary data
const posts = require("../data/posts")

// index (read)

function index(req, res) {
  res.send("This is the post list")
}

// show (read)

function show(req, res) {
  res.send(`This is the post of slug ${req.params.slug}`)
}

// store (create)

function store(req, res) {
  res.send("Create new post")
}

// update (update)

function update(req, res) {
  res.send(`Update the post of slug ${req.params.slug}`)
}

// modify (update)

function modify(req, res) {
  res.send(`Modify the post of slug ${req.params.slug}`)
}

// destroy (delete)

function destroy(req, res) {
  res.send(`Delete the post of slug ${req.params.slug}`)
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}