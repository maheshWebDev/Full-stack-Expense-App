const express = require('express');

const cors = require('cors');

const routes = require('./routes/expenseRoute')

const db = require('./config/dbconfig')

const app = express();

app.use(cors())

app.use(express.json());

app.use(routes);

db.sync().then(result=>{}).catch(err=>{
    console.log(err)
})

app.listen(3000,()=>{
console.log("server is running on 3000 port...!")
})