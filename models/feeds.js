const mongoose = require('mongoose')

const feedsSchema = mongoose.Schema(
 {
  imageurl: {
   type: String,
   required:true
  },
  caption: {
   type: String,
   required:true
  },
  likes: {
   type: Number,
   default:0
  }
 },
 {
  timestamps:true
 }
)

const Feeds = mongoose.model('Feeds', feedsSchema)

module.exports= Feeds