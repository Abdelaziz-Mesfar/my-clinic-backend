const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const patientsRouter = require('./routes/patients')
const app = express();

app.use(cors({ credentials: true, origin: [process.env.WEB_APP_URL] }))

app.get('/', (req, res) => {
    res.json('welcome to my cabinet api')
})

app.use('/patients', patientsRouter)


const TECHNOLOGIES = [
    {
        _id:"1",
        name: "React"
    },
    {
        _id:"2",
        name: "Node"
    }
]
app.get('/technologies', (req,res) =>{
    res.json(TECHNOLOGIES)
} )

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