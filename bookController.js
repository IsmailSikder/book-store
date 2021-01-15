//importing book model
Book = require('./bookModel')

// handling index action

exports.index = (req,res)=>{
    //getting all books
    Book.get((err,books)=>{
        if(err) {
            res.json({
                status: "Error",
                message:err
            })
        }
        res.json({
            status:"Success",
            message:"Books retrived successfully",
            data: books
        })
    })
}

//Handle Create book action
exports.newbook = (req,res)=>{
    var book = new Book()
    book.title = req.body.title
    book.author = req.body.author
    book.genre = req.body.genre
   
    book.save((err)=>{
        if(err){
            res.json(err)
        }
        res.json({
            message:"New book is created",
            data: book
        })
    })
}