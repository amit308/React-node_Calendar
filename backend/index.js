const mongoose = require('mongoose');
const connectToMongo = require('./connection');
const express = require('express');
var cors = require('cors')
// const uri = 'mongodb+srv://admin:Admin%40321@cluster0.bnwa2.mongodb.net/employee'
// mongoose.connect(uri).then(
//   () => { console.log("Connected to database")},
//   err => {console.log(err) }
// );

connectToMongo ();

const app = express()
app.use(cors())

app.use(express.json())
const port = 5000

app.use (express.json());

app.use('/api/Empdata', require('./routes/Emdata'))
app.use('/api/Shdata', require('./routes/Shdata'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

