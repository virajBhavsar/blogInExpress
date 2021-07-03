const express = require("express");
const path = require("path");
const router = express.Router();
const blogs = require("../data/blogs");

router.get("/", (req, res) => {
  res.render("./home");
});

router.get("/blog", (req, res) => {
  res.render("blogHome", {
    blogs: blogs,
  });
});

router.get("/blog/:key", (req, res) => {
  myBlog = blogs.filter((e) => {
    return e.key == req.params.key;
  });
  myBlog = myBlog[0];
  console.log(myBlog.title);
  res.render("oneBlog", {
    title: myBlog.title,
    content: myBlog.content,
  });
});

module.exports = router;
