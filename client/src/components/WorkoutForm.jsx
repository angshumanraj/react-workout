import { useWorkoutContext } from "../hooks/useWorkoutContext";
import { useState } from 'react';

export const WorkoutForm = () => {
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState('');
  const { dispatch } = useWorkoutContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const jsonRes = await response.json();

    if (response.ok) {
      setTitle('');
      setLoad('');
      setReps('');
      setError(null);
      console.log("New workout is added", jsonRes);
      dispatch({ type: 'CREATE_WORKOUT', payload: jsonRes }); // Dispatch action to update context
    } else {
      setError(jsonRes.error);
    }
  };

  return (
    <form className='create' onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>
      <label>Exercise Title:</label>
      <input
        type='text'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label>Load (in kg):</label>
      <input
        type='text'
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />
      <label>Reps:</label>
      <input
        type='text'
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />
      <button>Add Workout</button>
    </form>
  );
};
