//imports
const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");

connectDB();
const port = process.env.port || 8000;

app.use(express.json());

app.use("/", require("./routes/api"));
app.use("/api", require("./routes/api"));

app.listen(port, () => {
  console.log(`server alive on port ${port}!`);
});
