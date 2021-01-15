//importing mongoose
const mongoose = require('mongoose')

//creating a schema
var bookSchema= mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author:{
        type:String,
        required: true
    },
    genre:String,

    add_date:{
        type: Date,
        default: Date.now
    }    
})

//export book model
var Book = module.exports = mongoose.model('books',bookSchema)

module.exports.get = (callback, limit)=>{
    Book.find(callback).limit(limit)
}