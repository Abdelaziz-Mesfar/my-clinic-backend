const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req,res)=>{
    res.json('welcome to my cabinet api')
})

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`the port is listening on port ${PORT}`);
})