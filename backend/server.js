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

// Serving frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (_, res) => {
      res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
    })
} else {
    app.get('/', (req,res) => {
        res.status(200).json({ message: 'Welcome to the review website'})
    })
}
  

app.listen(PORT, (err) => console.log(err), 
    () => console.log("Server listening on PORT", PORT))
  