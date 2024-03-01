import express from "express";
import Workout from "../Models/workoutModel.js";
import mongoose from "mongoose";


//get all  workout
const getWorkout=async(req,res)=>{
    const workouts=await Workout.find({}).sort({createdAt:-1})
    
    res.status(200).json(workouts)
}

//Get single workout
const getSignleWorkout=async(req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such id found"})
    }

    const workout= await Workout.findById(id)
    if(!workout){
        return res.status(404).json({error:error.message})
    }
    res.status(200).json(workout)
}


//posting a workout

const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body;
    try {
        const workout = await Workout.create({ title, load, reps });
        res.status(201).json(workout); 
    } catch (error) {
        res.status(400).json({ error: error.message }); 
    }
};



//delete a workout
const deleteWorkout=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such id found"})
    }
    const workout=await Workout.findOneAndDelete({_id:id})

    if(!workout){
        return res.status(404).json({error:"no such workout"})
    }
    res.status(200).json(workout)

}
//update a workout
const updateWorkout=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such id found"})
    }
    const workout=await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!workout){
        return res.status(404).json({error:"no such workout"})
    }
    res.status(200).json(workout)

}    
export  {createWorkout,getWorkout,getSignleWorkout,updateWorkout,deleteWorkout};