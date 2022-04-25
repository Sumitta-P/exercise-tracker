import Exercise from "../Model/exercise.model.js"

export const getExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

export const getExerciseById = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    res.json(exercise);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}

export const saveExercise = async (req, res) => {
  const exercise = new Exercise(req.body);
  try {
    const insertedexercise = await exercise.save();
    res.status(201).json(insertedexercise);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

export const updateExercise = async (req, res) => {
  try {
    const updatedexercise = await Exercise.updateOne({_id:req.params.id}, {$set: req.body});
    res.status(200).json(updatedexercise);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

export const deleteExercise = async (req, res) => {
  try {
    const deletedexercise = await Exercise.deleteOne({_id:req.params.id});
    res.status(200).json(deletedexercise);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}