import { createContext, useReducer } from "react";
import PropTypes from 'prop-types';


export const workoutContext=createContext()

export const workoutReducer=(state,action)=>{
    switch (action.type) {
        case 'SET_WORKOUT':
            return{
                workouts:action.payload
            }
            
        case 'CREATE_WORKOUT':
            return{
                ...state,
                workouts:[action.payload,...state.workouts]
            }
    
        default:
            return state
    }
}
export const WorkoutContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(workoutReducer, {
        workouts: null
    });

    return (
        <workoutContext.Provider value={{ ...state, dispatch }}>
            {children}
        </workoutContext.Provider>
    );
};

WorkoutContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};
