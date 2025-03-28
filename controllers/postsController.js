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
  const postSlug = (req.params.slug)

  const post = posts.find(post => post.slug === postSlug)

  // handle 404 error

  if (!post) {

    return res.status(404).json({
      error: "404 Not Found",
      message: "Post not found"
    })

  }

  const newSlug = req.body.title.toLowerCase().replaceAll(" ", "-")
  // return the  updated post
  post.title = req.body.title
  post.slug = newSlug
  post.content = req.body.content
  post.image = req.body.image
  post.tags = req.body.tags

  res.json(post)
  console.log(posts);

}

// modify (update)

function modify(req, res) {
  const postSlug = (req.params.slug)

  const post = posts.find(post => post.slug === postSlug)

  // handle 404 error

  if (!post) {

    return res.status(404).json({
      error: "404 Not Found",
      message: "Post not found"
    })

  }

  const newSlug = req.body.title.toLowerCase().replaceAll(" ", "-")
  // update the post
  post.title = req.body.title
  post.slug = newSlug

  // return the  updated post
  res.json(post)
  console.log(posts);

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