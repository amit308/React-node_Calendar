const express = require('express');
const router = express.Router();
const shift = require('../models/shifts');

// Create new shift
    router.post('/createShift', async(req,res) =>{
    const shift =new shift(req.body);
    try {
        const newShift = await shift.save();
        res.status(201).json(newShift);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
      res.send(req.body);
    });

// Getting shift list
    router.get("/shifts", async (req, res) => {
    try {
      const shifts = await shift.find();
      res.json(shifts);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
    });

//   Deleting shift
    router.delete("/shifts/:id", async (req, res) => {
     try {
      await res.shift.remove();
      res.json({ message: "Shift deleted" });
        } catch (err) {
       res.status(500).json({ message: err.message });
       }
       }); 

module.exports = router
