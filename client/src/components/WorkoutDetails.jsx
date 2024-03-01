import PropTypes from 'prop-types';


export const WorkoutDetails = ({workoutProp}) => {
  
    return (
    <div className="workout-details">
        <h4>{workoutProp.title}</h4>
        <p><strong>Load (kg):</strong>{workoutProp.load}</p>
        <p><strong>Reps:</strong>{workoutProp.reps}</p>
        <p>{workoutProp.createdAt}</p>
    </div>
  )
}
WorkoutDetails.propTypes = {
    workoutProp: PropTypes.shape({
      title: PropTypes.string.isRequired,
      reps: PropTypes.number.isRequired,
      load: PropTypes.number.isRequired,
      createdAt: PropTypes.string.isRequired
    }).isRequired
  };