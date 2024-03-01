import { useEffect } from "react";
import { WorkoutForm } from "../components/WorkoutForm";
import { WorkoutDetails } from "../components/WorkoutDetails";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

export const Home = () => {
  const {workouts,dispatch}=useWorkoutContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      
        const response = await fetch('/api/workouts')
        const jsonR = await response.json();
        if (response.ok) {
          dispatch({type:'SET_WORKOUT',payload:jsonR})
        }    
      
    }
    fetchWorkouts()
  }, [dispatch]);
  
  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workoutProp={workout} />
        ))}
      </div>
    <WorkoutForm />
  </div>
);
};