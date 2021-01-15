
//import express router
let Router = require('express').Router()

//set default api response
Router.get('/',(req,res)=>{
    res.json({
        status:"WORKING",
        message: "This is the api route"
    })
})

//importing book controller
var bookController = require('./bookController')

//book routes
Router.route('/books')
        .get(bookController.index)
        .post(bookController.newbook)
Router.route('/books/:book_id')
        .put()

//export api routes
module.exports = Router