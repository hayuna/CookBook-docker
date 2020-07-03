const mongoose = require("mongoose");
const CONNECT_URL = `mongodb://mongodb:27017/cookbook`; // mern: db name

const connectDB = () => {
  mongoose.connect(CONNECT_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
    .then(() => console.log("mongodb connected ..."))
    .catch(e => console.log(`failed to connect mongodb: ${e}`));
};

module.exports = connectDB;
