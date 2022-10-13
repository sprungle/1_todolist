const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const config = require('./config');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//define constant for the port where server is responding
const port = 3001;

//define routes which are handled by the servers
app.get("/",async function (req,res){
    const connection = await mysql.createConnection(config.db)
    res.status(200).send('test')


     /*    try {
        const connection = await mysql.createConnection(config.db)
        const [result,] = await connection.execute('select * from task')
        // return 200 status (ok) on JSON
        // res.status(200).json({message: "Node server is responding"})
        // res.status(200).send('Database connection was made')
        if (!result) result = [] // if there is no data, return empty array
        res.status(200).json(result)

    } catch(err) {
        // res.status(500).send(err.message)
        res.status(500).json({error: err.message})

    }*/

})

app.listen(port)