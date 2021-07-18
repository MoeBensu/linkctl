//imports
const mongoose = require("mongoose");
const config = require("config");

//db uri
const uri = config.get("mongoUrl");

//details on options https://mongoosejs.com/docs/connections.html
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// connect MongoDB
const connectMongoDB = async () => {
  try {
    await mongoose.connect(uri, options);
    console.log("MongoDB ist connected!");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectMongoDB;
