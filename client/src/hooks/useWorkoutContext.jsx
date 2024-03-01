import {workoutContext} from "../comtext/WorkoutContext"
import { useContext } from "react"


export const useWorkoutContext = () => {
  
    const context=useContext(workoutContext)
    
    if(!context){
        throw Error("useWorkoutContext must be used inside an workoutContextProvider")
    }
    return (
    context  
  )
}
