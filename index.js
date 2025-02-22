import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import getPanelRouter from "./routes/panel-routes.js";

const app = express();
const PORT = 8800;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// routes
app.use("/panels", getPanelRouter);

app.listen(PORT, ()=>{
    console.log(`Connected to backend! PORT: ${PORT}`);
});