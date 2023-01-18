const express = require('express');
//const { default: mongoose } = require('mongoose');
const Employee = require('../models/employee');
const router = express.Router();

    // 1. create new employee
    router.post('/createEmployee', async(req,res) =>{
    console.log(req.body,"body");
   
    const employee =new Employee(req.body);
    console.log(employee,"Employee");

    try {
        console.log("h991")
        const newEmployee = await employee.save();
        console.log("hii 2")
        res.status(201).json(newEmployee);

      } catch (err) {
        res.status(400).json({ message: err.message });
      }
      
    });
    
    // 2. create new employee
    //     router.post('/createEmployee', (req, res) => {
    //     const newEmployee = new Employee(req.body);
      
    //     newEmployee.save()
    //       .then(employee => res.json(employee))
    //       .catch(err => res.status(400).json('Error: ' + err));
    //     });

    // 1. getting employees list
        router.get("/employees", async (req, res) => {
        try {
          const employees = await Employee.find();
          res.json(employees);
        } catch (err) {
          res.status(500).json({ message: err.message });
        }
        });

    // 2. getting employees list
    //   router.get('/employees', (req, res) => {
    //   Employee.find()
    //   .then(employees => res.json(employees))
    //   .catch(err => res.status(400).json('Error: ' + err));
    //   });

    // 1. deleting an employee
        // router.delete("/employees/:id", async (req, res) => {
        // try {
        //   await res.employee.remove();
        //   res.json({ message: "Employee deleted" });
        // } catch (err) {
        //   res.status(500).json({ message: err.message });
        // }
        // });  

    // 2. Delete an employee
        router.delete('/employee/:id', (req, res) => {
        Employee.findByIdAndDelete(req.params.id)
         .then(() => res.json('Employee deleted.'))
         .catch(err => res.status(400).json('Error: ' + err));
        });

        // Update an employee
        // router.put('/:id', (req, res) => {
        // Employee.findById(req.params.id)
        // .then(employee => {
        // employee.username = req.body.username;
        // employee.email = req.body.email;
        // employee.phone = req.body.phone;
        // employee.wage = req.body.wage;
        // employee.role = req.body.role;
  
        // employee.save()
        //   .then(() => res.json('Employee updated!'))
        //   .catch(err => res.status(400).json('Error: ' + err));
        // })
        // .catch(err => res.status(400).json('Error: ' + err));
        //  });

module.exports = router

