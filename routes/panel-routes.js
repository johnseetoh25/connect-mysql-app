import express from "express";
import { getAllPanels } from "../controllers/panel-controller.js";

const router = express.Router();

// Get all panels
router.get("/", getAllPanels);

export default router;