const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.post("/register",(req,res)=>{
    res.send(`Hello ${req.body.email}, please be patient, your account is currently being created`);
    
})

app.get('/register', (req,res) =>{
    res.send('Hello from get request')
})


app.listen(process.env.PORT || 8081);

