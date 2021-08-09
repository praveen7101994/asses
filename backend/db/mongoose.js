const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://praveen:TZTZQRRBL6qUNxsy@cluster0.yvyyk.mongodb.net/theTaskDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})