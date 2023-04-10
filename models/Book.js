import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Book = new Schema({
  title: { 
    type: String,
    required: true
},
  author: { 
    type: String,
},
description: { 
    type: String, 
},
rank: { 
    type: Number, 
},
book_image: { 
    type: String 
}
});

export default mongoose.model("books", Book);