import express from 'express';
import dotenv from 'dotenv';
import workoutRoutes from "./Routes/workout.js";
import moongose from "mongoose"
import cors from "cors"

dotenv.config()
//express app
const app = express();
app.use(cors())

//midddleware
app.use(express.json())

app.use((req,res,next)=>{

    console.log(req.path,req.method)
    next()
})
//Routes
app.use('/api/workouts',workoutRoutes)
app.get(
    "/",(req,res)=>{
        res.json("Hello")
    }
)
//connect to database
moongose.connect(process.env.MON_URL)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log("connected to database listening on port 5000!!");
        })
    })
    .catch((error)=>{
        console.log(error)
    })


