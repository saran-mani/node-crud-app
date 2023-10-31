const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const Book = require("./models/book");

mongoose.connect("mongodb://127.0.0.1:27017/Books");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/books", async (req, res) => {
  const books = await Book.find({});
  res.render("books/index", { books });
});

app.get("/books/new", (req, res) => {
  res.render("books/new");
});

app.post("/books", async (req, res, next) => {
  try {
    const book = new Book(req.body.book);
    await book.save();
    res.redirect(`/books/${book._id}`);
  } catch (e) {
    next(e);
  }
});
app.get("/books/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.render("books/show", { book });
});

app.get("/books/:id/edit", async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.render("books/edit", { book });
});

app.put("/books/:id", async (req, res) => {
  const { id } = req.params;
  const updatedBook = req.body;
  try {
    const book = await Book.findByIdAndUpdate(id, updatedBook);
    res.redirect(`/books/${book._id}`);
  } catch (error) {
    console.error(error);
    res.redirect(`/books/${id}/edit`);
  }
});
app.delete("/books/:id", async (req, res) => {
  const { id } = req.params;
  await Book.findByIdAndDelete(id);
  res.redirect("/books");
});
app.listen(3000, () => {
  console.log("Server run on port 3000");
});
