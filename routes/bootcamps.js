const express = require('express')
const router = express.Router()

// ROUTE TO GET ALL BOOTCAMPS
router.get('/', (req, res) => {
    res.status(200).json({success: true, msg: 'Show All Bootcamps'})
})

//ROUTE TO GET BOOTCAMP BY ID
router.get('/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Get Bootcamp ${req.params.id}`})
})

// ROUTE TO CREATE A NEW BOOTCAMP
router.post('/', (req, res) => {
    res.status(200).json({success: true, msg: 'Create New Bootcamp'})
})

// ROUTE TO UPDATE BOOTCAMP BY ID
router.put('/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Update Bootcamp ${req.params.id}`})
})


// ROUTE TO DELETE BOOTCAMP BY ID
router.delete('/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Delete Bootcamp ${req.params.id}`})
})

module.exports = router