const mongoose = require ("mongoose");

const EmployeeSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
         },
    email:{
        type: String,
        required: true,
        unique: true
         },
    phone:{
            type: Number,
            required: true,
            unique: true
         },
    wage:{
            type: Number,
            required: true
         },
    role:{
            type: String,
            required: true
             },   
});
module.exports = mongoose.model('employee',EmployeeSchema );