//imports
const express = require('express');
const app = express();
const connectDB = require('./config/db');



connectDB();
const port = process.env.port ||  8000;

app.use(express.json());


app.use('/api', require('./routes/shortenUrl'));
app.use('/', require('./routes/redirect'));

app.listen(port, () => {
    console.log(`server alive on port ${port}!`);
});

