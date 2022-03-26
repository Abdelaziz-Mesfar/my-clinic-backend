const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();

const patientsRouter = require('./routes/patients')
const app = express();

app.get('/', (req, res) => {
    res.json('welcome to my cabinet api')
})

app.use('/patients', patientsRouter)

const PORT = process.env.PORT || 7000;
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true})
    .then(() => {
        console.log('successfully connected to mongodBD');
        app.listen(PORT, () => {
            console.log(`the port is listening on port ${PORT}`);
        })
    })
    .catch(error => {
        console.log(error);
    })