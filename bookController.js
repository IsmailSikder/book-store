//importing book model
Book = require('./bookModel')

// handling index action

exports.index = (req,res)=>{
    //getting all books
    Book.get((err,books)=>{
        //console.log(err)
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
            
            res.json({
                status:'Error',
                message:err
            })
        }
        res.json({
            status: 'Success',
            message:"New book is created",
            data: book
        })
    })
}

//Updating book by id
exports.updatebookById = (req,res)=>{
    let book ={}
    if(req.body.title) book.title = req.body.title
    if(req.body.author) book.author= req.body.author
    if(req.body.genre) book.genre = req.body.genre

    book ={$set:book}
    Book.update({_id:req.params.book_id},book,(err)=>{
        
        if(err){
            res.json({
                status:'Error',
                message:err
            })
        }
        res.json({
            status: 'Success',
            message:"book updated",
            data: book
        })
    })
}

// Deleting book by id
exports.removebookById = (req,res)=>{
    Book.remove({_id:req.params.book_id},err=>{
        if(err){
            res.json({
                status:'Error',
                message: err
            })
        }
        res.json({
            status: 'Success',
            message:'A book removed',
        })
    })
}