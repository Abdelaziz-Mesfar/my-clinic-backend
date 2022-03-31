const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const patientsRouter = require('./routes/patients')
const usersRouter = require('./routes/users')
const app = express();

app.use(express.json())
app.use(cors({ credentials: true, origin: [process.env.WEB_APP_URL] }))

app.get('/', (req, res) => {
    res.json('welcome to my cabinet api')
})

app.use('/patients', patientsRouter)
app.use('/auth', usersRouter)


const PORT = process.env.PORT || 7000;
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true })
    .then(() => {
        console.log('successfully connected to mongodBD');
        app.listen(PORT, () => {
            console.log(`the port is listening on port ${PORT}`);
        })
    })
    .catch(error => {
        console.log(error);
    })