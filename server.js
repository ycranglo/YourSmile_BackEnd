const express = require('express')
const app = express()
const FeedModel = require('./models/feeds')
const mongoose = require("mongoose")
const cors = require('cors');
app.use(cors());


app.use(express.json())


// password sa mongodb hehe gnkDlvR7JxTxWTED

//routes
app.get('/', (req, res) => {
 res.send("hello from get")
})

app.get('/Feeds',async (req, res) => {
 try {
   const feeds = await FeedModel.find({})
   res.status(200).json(feeds)
   console.log("inside get feeds all")
 } catch (error) { 
  console.log(error.message)
  res.status(500).json({message: error.message})
 }
}) 
app.get('/Feeds/:id',async(req,res)=>{
  try {
    const {id} = req.params
   const feeds = await FeedModel.findById(id)
    res.status(200).json(feeds)
    
 } catch (error) { 
  console.log(error.message)
  res.status(500).json({message: error.message})
 }
})

app.post('/Feed',async(req, res)=> {
 try {
    console.log("inside post route(postFeed)")
  const feeds = await FeedModel.create(req.body)
  res.status(200).json(feeds)
  // console.log(req.body)
  // res.send(req.body)

 } catch (error) { 
  console.log(error.message)
  res.status(500).json({message: error.message})
 }
})
app.put('/Feeds/:id',async(req,res)=>{
  try {
    const { id } = req.params
    const feeds =await FeedModel.findByIdAndUpdate(id,req.body)
    if(!feeds){
      res.status(404).json({message: `cannot find any feed with this id${id}`})
    }else{
      res.status(200).json(feeds)
    }
  
 } catch (error) { 
  console.log(error.message)
  res.status(500).json({message: error.message})
 }
})

app.delete('/Feeds/:id',async(req,res)=>{
 try {
    const { id } = req.params
    const feeds =await FeedModel.findByIdAndDelete(id)
    if(!feeds){
      res.status(404).json({message: `cannot find any feed with this id${id}`})
    }else{
      res.status(200).json(feeds)
    }
  
 } catch (error) { 
  console.log(error.message)
  res.status(500).json({message: error.message})
 }
  
})


mongoose.connect("mongodb+srv://yocorangelo03:gnkDlvR7JxTxWTED@reactnative.kcrib.mongodb.net/backendYS?retryWrites=true&w=majority&appName=reactNative").then(() => {

 app.listen(8000, () => {
 console.log("backend is running on port 8000")
})
 console.log("mongodb connected")
})



