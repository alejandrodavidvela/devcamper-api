const express = require('express')
const dotenv = require('dotenv')

// Load env vars
dotenv.config({ path: './config/config.env'})

const app = express()

// ROUTE TO GET ALL BOOTCAMPS
app.get('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({success: true, msg: 'Show All Bootcamps'})
})

//ROUTE TO GET BOOTCAMP BY ID
app.get('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Get Bootcamp ${req.params.id}`})
})

// ROUTE TO CREATE A NEW BOOTCAMP
app.post('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({success: true, msg: 'Create New Bootcamp'})
})

// ROUTE TO UPDATE BOOTCAMP BY ID
app.put('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Update Bootcamp ${req.params.id}`})
})


// ROUTE TO DELETE BOOTCAMP BY ID
app.delete('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Delete Bootcamp ${req.params.id}`})
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
