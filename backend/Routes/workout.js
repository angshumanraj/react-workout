import express from "express";
import {createWorkout, deleteWorkout, getSignleWorkout, getWorkout, updateWorkout} from "../controllers/workoutController.js";


const router=express.Router();
//get all  workout
router.get('/',getWorkout);


//Get single workout
router.get('/:id',getSignleWorkout);


//posting a workout
router.post('/',createWorkout)


//delete a workout
router.delete('/:id',deleteWorkout);


//update a workout
router.patch('/:id',updateWorkout)


export default router;