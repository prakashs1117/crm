import express from "express";
import routes from "./src/routes/crmRoutes";

const app = express();
const PORT= 3002;

routes(app);

app.get('/', (req, res) => 
    res.send(`NODE and express server is running on the PORT :: ${PORT}`)
);

app.listen(PORT, () => console.log(`NODE and express server is running on the PORT :: ${PORT}`))