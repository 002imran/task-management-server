const express = require('express');
const cors = require('cors');

require('dotenv').config();

const port = process.env.PORT || 5000;

const app = express();

//midleware
app.use(cors());
app.use(express.json());

app.get('/', async(req, res)=>{
    res.send('Task management server is running.')
})

app.listen(port, ()=> console.log(`Task management server is running on port ${port}`))