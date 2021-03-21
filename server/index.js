const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./router");
const dotenv = require("dotenv");
const app = express();
const bodyParser = require('body-parser');
dotenv.config();
const logger  = require("./middleware/logger");

//db
mongoose
  .connect(process.env.CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDb connected ..."))
  .catch((err) => console.error("Fail to Connect", err));

//mid. third-party
app.use(cors());
//mid. third-party
app.use(bodyParser.json({limit: '50mb', extedned: true}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
//mid. customer
// app.use(logger);

//routers
app.use(router);

app.get("/", logger,async (req, res) => {
  res.json({
    message: "MeetCampus'e Hosgeldiniz !",
    status: 200,
  });
});

//err. handling

//run
const PORT = process.env.PORT||5000;
app.listen(PORT, () => {
  console.log(`Connected localhost://${PORT}`);
});
