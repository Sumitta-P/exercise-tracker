import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../EditExercise/EditExercise.css";

const EditExercise = () => {
    const [activityname, setActivityName] = useState("");
    const [activitytype, setActivityType] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [date, setDate] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect (() => {
        getExerciseById();
    }, []);

    const getExerciseById = async() => {
        const response = await axios.get(`http://localhost:4000/exercises/${id}`);
        setActivityName(response.data.activityname);
        setActivityType(response.data.activitytype);
        setDescription(response.data.description);
        setDuration(response.data.duration);
        setDate(response.data.date);
    };

    const updateExercise = async(e) => {
        e.preventDefault();
        try{
            await axios.patch(`http://localhost:4000/exercises/${id}`, {
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
                    <form onSubmit={updateExercise}>
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
                                    Update
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>  
        </div> 
    ) 
}
           
export default EditExercise;