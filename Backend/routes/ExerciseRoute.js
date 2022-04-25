import express from "express";
import { 
    getExercises, 
    getExerciseById,
    saveExercise,
    updateExercise,
    deleteExercise
} from "../controllers/exercises.js";

const router = express.Router();

router.get('/exercises', getExercises);
router.get('/exercises/:id', getExerciseById);
router.post('/exercises', saveExercise);
router.patch('/exercises/:id', updateExercise);
router.delete('/exercises/:id', deleteExercise);


export default router;