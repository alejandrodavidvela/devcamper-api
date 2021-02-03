const fs = require('fs')
const mongoose = require('mongoose')
const colors = require('colors')
const dotenv = require('dotenv')

// Load env variables
dotenv.config({path: './config/config.env'})

//Load models (1st Step)
const Bootcamp = require('./models/Bootcamp')
const Course = require('./models/Course')



//Connect to DB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

//Read JSON files (2nd Step)
const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8'))
const courses = JSON.parse(fs.readFileSync(`${__dirname}/_data/courses.json`, 'utf-8'))

//Import Bootcamps Data into DB(3rd Step)
const importData = async () => {
    try {
        await Bootcamp.create(bootcamps)
        // await Course.create(courses)
        console.log('Data Imported...'.green.inverse)
        process.exit()
    } catch (err) {
        console.log(err)
    }
}

//Delete Bootcamps Data from DB (4th Step)
const deleteData = async () => {
    try {
        await Bootcamp.deleteMany()
        await Course.deleteMany()
        console.log('Data Destroyed...'.red.inverse)
        process.exit()
    } catch (err) {
        console.log(err)
    }
}

if(process.argv[2] === '-i'){
    importData()
}else if (process.argv[2] === '-d') {
    deleteData()
}