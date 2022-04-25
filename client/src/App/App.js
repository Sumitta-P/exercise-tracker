import React from "react";
import "../App/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExerciseList from "../Component/Exerciselist/Exerxiselist";
import AddExercise from "../Component/AddExercise/AddExercise";
import EditExercise from "../Component/EditExercise/EditExercise";
import Navbar from "../Component/Navbar/Navbar";

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<ExerciseList/>}/>
          <Route path="add" element={<AddExercise/>}/>
          <Route path="edit/:id" element={<EditExercise/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;