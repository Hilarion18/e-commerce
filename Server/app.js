require('dotenv').config()
const express  = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
// const Twitter = require('twitter-node-client').Twitter
const indexRouter   = require('./routers/index')

// mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log('mongo connected')
// });

var mongodUri = `mongodb://${process.env.MLAB_USER}:${process.env.MLAB_PASS}@ds163013.mlab.com:63013/simple_ecommerce`
mongoose.connect(mongodUri, {
    useNewUrlParser: true
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/', indexRouter)



const port = process.env.PORT || 3000
app.listen(port, (req,res) => {
    console.log(`Server is running on port: ${port}`)
})