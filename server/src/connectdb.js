const mongoose = require("mongoose");
const CONNECT_URL = `mongodb://mongodb:27017/cookbook`; // mern: db name

const connectDB = () => {
  return mongoose.connect(CONNECT_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
};

module.exports = connectDB;
