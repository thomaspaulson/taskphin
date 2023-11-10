import mongoose from "mongoose";
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: String,
  author: String,
  summary: String,
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
