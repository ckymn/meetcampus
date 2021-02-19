const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./router");
const dotenv = require("dotenv");
const app = express();
const bodyParser = require('body-parser');
dotenv.config();

//db
mongoose
  .connect(process.env.CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDb connected ..."))
  .catch((err) => console.error("Fail to Connect", err));

//body-parse
// app.use(express.json());
app.use(bodyParser.json({limit: '50mb', extedned: true}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// good http req
app.use(cors());

//routers
app.use(router);
app.get("/", async (req, res) => {
  res.json({
    message: "MeetCampus'e Hosgeldiniz !",
    status: 200,
  });
});

//run
const PORT = process.env.PORT||3003;
app.listen(PORT, () => {
  console.log(`Connected localhost://${PORT}`);
});
