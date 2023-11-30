import express from "express";
import routes from "./src/routes/crmRoutes";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = 3002;

/**
 * mongoose connection
 */
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/CRMdb", {
  useNewUrlParser: true,
});

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

routes(app);

app.get("/", (req, res) =>
  res.send(`NODE and express server is running on the PORT :: ${PORT}`)
);

app.listen(PORT, () =>
  console.log(`NODE and express server is running on the PORT :: ${PORT}`)
);
