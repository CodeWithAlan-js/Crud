import express from 'express';
import { catchErrors } from '../helpers.js';
import { addMoovie, getMoovies, getMoovie, updateMoovie, deleteMoovie } from '../controllers/movieControllers.js';

const router = express.Router();

router.post('/add-moovie', catchErrors(addMoovie));

router.get('/get-moovies', catchErrors(getMoovies));

router.get('/get-moovie/:id', catchErrors(getMoovie));

router.patch('/update-moovie/:id', catchErrors(updateMoovie));

router.delete('/delete-moovie/:id', catchErrors(deleteMoovie));





export default router;