const express = require('express') // require the express package
const app = express() // initialize your express app instance

const cors = require('cors');
const weatherData =require('../data/weather.json')
require('dotenv').config();

app.use(cors()) // after you initialize your express app instance
// a server endpoint 
app.get('',(req,res)=>{
    res.json(weatherData)
    
})
app.listen(8000) // kick start the express server to work