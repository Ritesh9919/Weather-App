import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import path from 'path';

import weatherRouter from './routes/weather.routes.js';

const app = express();

// setting view engine
app.set('view engine', 'ejs');
app.set('views', path.resolve('src/views'));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res)=> {
    res.render('weather');
})


app.use('/api', weatherRouter);


app.listen(process.env.PORT || 8000, ()=> {
    console.log(`Server is running on port:${process.env.PORT}`);
})






