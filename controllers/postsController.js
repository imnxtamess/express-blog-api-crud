// import the necessary data
const posts = require("../data/posts")

// index (read)

function index(req, res) {

  let filteredPosts = posts

  if (req.query.tag) {
    filteredPosts = posts.filter(post => post.tags.includes(req.query.tag))
  }

  res.json(filteredPosts)
}

// show (read)

function show(req, res) {

  const postSlug = (req.params.slug)

  const post = posts.find(post => post.slug === postSlug)

  // handle 404 error

  if (!post) {

    return res.status(404).json({
      error: "404 Not Found",
      message: "Post not found"
    })

  }

  res.json(post)
}

// store (create)

function store(req, res) {

  const newSlug = req.body.title.toLowerCase().replaceAll(" ", "-")

  console.log(newSlug);


  const newPost = {
    title: req.body.title,
    slug: newSlug,
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags
  }

  posts.push(newPost)
  console.log(posts)

  res.status(201)
  res.json(newPost)
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
  const postSlug = (req.params.slug)

  const post = posts.find(post => post.slug === postSlug)

  // handle 404 error

  if (!post) {

    return res.status(404).json({
      error: "404 Not Found",
      message: "Post not found"
    })

  }

  // delete the post

  posts.splice(posts.indexOf(post), 1)

  console.log(posts);

  res.sendStatus(204)


}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}