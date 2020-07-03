const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const compression = require("compression");
const helmet = require("helmet");

const connectDB = require("./connectdb");
const routes = require("./routes");

connectDB()

app.use(cors());
app.use(compression());
app.use(helmet());
app.use(logger("tiny"));
app.use(express.json({ limit: '10mb', extended: true }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use("/api", routes);

app.get("/api/hello", (req, res) => {
  res.send("hello mern project from server !!");
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ msg: "Sorry can't find that!" });
});

// 505 error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ msg: "Something is broken down on server ):" });
});

app.listen(5000, () => {
  console.log(`server is running on port 5000`);
});
