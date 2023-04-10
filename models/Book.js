import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Book = new Schema({
  title: { 
    type: String 
},
  author: { 
    type: String 
},
  description: { 
    type: String, 
},
  "book_image": { 
    type: String 
}
});

export default mongoose.model("books", Book);