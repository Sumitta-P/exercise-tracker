import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../AddExercise/AddExercise.css";

const AddExercise = () => {
    const [activityname, setActivityName] = useState("");
    const [activitytype, setActivityType] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [date, setDate] = useState("");
    const navigate = useNavigate();

    const saveExercise = async(e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:4000/exercises', {
                activityname,
                activitytype,
                description,
                duration,
                date
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }
   
    return (
        <div className="form-container">
        <div className="columns">
            <div className="header-add">
                <h2>Add Exercise</h2>
            </div>
            <div className="column">
                <form onSubmit={saveExercise}>
                    <div className="field">
                        <label className="label">Name*: </label>
                        <div className="control">
                            <input 
                                required
                                className="input"
                                maxLength="10"
                                type="text"
                                placeholder="exercise Name"
                                value={activityname}
                                onChange={(e) => setActivityName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Type*: </label>
                        <div className="control">
                            <select 
                                required
                                className="input"
                                type="text"
                                value={activitytype}
                                onChange={(e) => setActivityType(e.target.value)}
                            >
                                <option value="">Select...</option>
                                <option value="Running">Running</option>
                                <option value="Bike">Bicycle ride</option>
                                <option value="Swimming">Swimming</option>
                                <option value="Walking">Walking</option>
                                <option value="Hiking">Hiking</option>
                                <option value="football">Football</option>
                                <option value="badminton">Badminton</option>
                                <option value="boxing">Boxing</option>
                                <option value="dancing">Dancing</option>
                                <option value="indoor">Indoor</option>
                                <option value="outdoor">Outdoor gym</option>
                            </select>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Description: </label>
                        <div className="control">
                            <textarea 
                                maxLength="30"
                                type="text" 
                                placeholder="Description" 
                                style={{height: '100px'}}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            >   
                            </textarea>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Duration*: </label>
                        <div className="control">
                            <input
                                required
                                type="time"
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Date*: </label>
                        <div className="control">
                            <input 
                                required 
                                type="Date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />       
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button 
                                className='button' 
                                value="submit" 
                                type="submit"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>  
        </div> 
    ) 
}
           
export default AddExercise;