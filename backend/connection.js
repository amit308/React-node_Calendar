const mongoose = require('mongoose');
//const mongoURI = 'mongodb+srv://admin:Admin@321@cluster0.bnwa2.mongodb.net&ssl=true/?retryWrites=true&w=majority'
const uri = 'mongodb+srv://admin:Admin%40321@cluster0.bnwa2.mongodb.net/employee'

 const connectToMongo = () => {
  mongoose.connect(uri).then(
    () => { console.log("Connected to database")},
    err => {console.log(err) }
  );
}

// mongoose.connect(uri).then(
//   () => { console.log("Connected to database")},
//   err => {console.log(err) }
// );


module.exports = connectToMongo;