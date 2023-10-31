const mongoose =require('mongoose');

const Schema=mongoose.Schema;


const BookSchema=new Schema({
    title:String,
    author:String,
    summary:String
})

module.exports=mongoose.model('Book',BookSchema)