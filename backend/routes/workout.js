const express = require("express");
const router = express.Router();
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')


// router.get('/about', (req, res) => {
//     res.render('about')
// })

//GET all workouts
router.get( '/', getWorkouts )

//GET a Single workout
router.get('/:id', getWorkout)

//Post a new workout
router.post('/', createWorkout)

//Delete a Single workout
router.delete('/:id', deleteWorkout)

//Update a workout
router.patch('/:id', updateWorkout)


router.get( '/pullups', (req, res) => {
    res.send("pullups")
} )

module.exports = router