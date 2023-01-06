const express = require('express')
const path = require('path')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const PORT = process.env.PORT || 2000;

connectDB()

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api', require('./routes/feedbackRoutes'))

app.listen(PORT, (err) => console.log(err), 
() => console.log("Server listening on PORT", PORT))