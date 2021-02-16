//imports
const express = require('express');
const app = express();
const connectDB = require('./config/db');



connectDB();
const port = process.env.port ||  8000;

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello Moe!');
});

app.use('/api', require('./routes/shortenUrl'));

app.listen(port, () => {
    console.log(`server alive on port ${port}!`);
});

