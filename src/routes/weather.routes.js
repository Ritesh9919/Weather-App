import express from 'express';
const router = express.Router();
import {getWeather} from '../controllers/weather.controller.js';


router.post('/getWeather', getWeather);


export default router;