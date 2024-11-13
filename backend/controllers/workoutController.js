const Workout = require("../models/workout.model.js");
const mongoose = require('mongoose')

//get all workouts
const getWorkouts = async (req, res) => {
    const workout = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workout)
}

//get a single workout
const getWorkout = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout"})
    }
    
    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error: "No such workout"})
    }
    res.status(200).json(workout)
}

//create a new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a workout
const deleteWorkout = async (req, res) => {
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such workout"})
  }

  const workout = await Workout.findOneAndDelete({_id: id})

  if(!workout) {
    return res.status(400).json({error: "No such workout"})
  }

  res.status(200).json(workout)
}
//update a workout
const updateWorkout = async (req, res) => {
  const {id} = req.params // Extract the `id` parameter from the request URL


  // Check if the provided ID is a valid MongoDB ObjectId
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "no such workout"})
  }


  // Find and update the workout with the matching ID from the database
  const workout = await Workout.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  // If no workout is found, return a 400 error
  if(!workout) {
    return res.status(400).json({error: "No such workout"})
  }

  // Return the updated workout data with a 200 status if successful
  res.status(200).json(workout)
}

//exports
module.exports = {
    getWorkouts,
    getWorkout,
    deleteWorkout,
    createWorkout,
    updateWorkout
}