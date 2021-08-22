require("./db/connection");
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const urlRouter = require("./url/url.routes");

app.use(express.json());
app.use(cors());
app.use(urlRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
