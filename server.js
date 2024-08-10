const express = require('express');
const mongoose =require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const authRoute = require('./Routes/authRoute');
const historyRoute = require('./Routes/historyRoute');
const modesRoute = require('./Routes/modesRoute');

dotenv.config({path: './config.env'});//this should always come before any import.

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//route
app.use('/api/auth', authRoute);
app.use('/api/history', historyRoute);
//app.use('/api/modes', modesRoute)

//Mongoose DB Connection
mongoose.connect(process.env.CONN_STR)
.then((conn)=>{    
    //console.log(conn);
    console.log('DB connection successful');
}).catch((error) =>{
     console.log('error in connection.',error)
})

//Global Error Handler
app.use((err,req, res, next) =>{
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
});


const port = process.env.PORT || 3000;

const server = app.listen(port,() =>{
    console.log('Server has started...');
})