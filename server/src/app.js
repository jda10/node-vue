const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('combine'));
app.use(express.json());
app.use(cors());


app.get("/",(req,res)=>{
    res.send('hello world');
})


app.listen(process.env.PORT || 8081);

