const mongoose = require ("mongoose");

const ShiftSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
         } 
});
module.exports = mongoose.model('shift',ShiftSchema );