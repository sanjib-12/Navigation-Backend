const express = require('express');
const mongoose =require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({path: './config.env'});//this should always come before any import.


const app = express();

//Middleware
app.use(cors);
app.use(express.json());

//Mongoose DB Connection
mongoose.connect(process.env.CONN_STR)
.then((conn)=>{    
    //console.log(conn);
    console.log('DB connection successful');
}).catch((error) =>{
     console.log('error in connection.',error)
})




const port = process.env.PORT || 3000;

const server = app.listen(port,() =>{
    console.log('Server has started...');
})