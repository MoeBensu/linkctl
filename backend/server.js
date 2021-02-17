//imports
const express = require('express');
const app = express();
const connectDB = require('./config/db');



connectDB();
const port = process.env.port ||  8000;

app.use(express.json());


app.use('/', require('./routes/routes'));
app.use('/api', require('./routes/routes'));

app.listen(port, () => {
    console.log(`server alive on port ${port}!`);
});

