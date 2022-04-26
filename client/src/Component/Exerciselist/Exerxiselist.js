import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Exerciselist/Exerciselist.css";

const ExerciseList = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
      getExercises();
    }, []);

    const getExercises = async() => {
      const response = await axios.get('https://tenrun.herokuapp.com/exercises');
      setExercises(response.data);
    }

    const deleteExercise = async (id) => {
      try{
        await axios.delete(`https://tenrun.herokuapp.com/exercises/${id}`);
        getExercises();
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div className="columns-list">
      <div className="column is-half">
        <div className="table-head mt-5">
          <h1>Exercise List</h1>
        </div>
        <div className="add-btn">
          <Link to="add" className="button-add">
            <i className="fa-solid fa-plus"></i>
          </Link>
        </div>
        <table className="table mb-5">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {exercises.map((exercise) => (
              <tr key={exercise._id}>
                <td data-label="Name">{exercise.activityname}</td>
                <td data-label="Type">{exercise.activitytype}</td>
                <td data-label="Description">{exercise.description}</td>
                <td data-label="Duration">{exercise.duration}</td>
                <td data-label="Date">{exercise.date}</td>
                <td>
                  <Link 
                    to={`edit/${exercise._id}`} 
                    className="button-list is-small mr-2"
                  >
                    <i className="fa-solid fa-pencil"></i>
                  </Link>
                  <button 
                    onClick={() => deleteExercise(exercise._id)} 
                    className="button-list btn-danger is-small"
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table> 
      </div>
    </div>
  );
}

export default ExerciseList;