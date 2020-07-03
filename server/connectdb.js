const mongoose = require("mongoose");
const mode = process.env.NODE_ENV === 'production' ? 'mongodb' : 'localhost'
const CONNECT_URL = `mongodb://${mode}:27017/cookbook`; // mern: db name

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
