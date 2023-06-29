import express from 'express';
import { getUSer } from "../controllers/general.js";

const router = express.Router();

router.get("/user/:id", getUSer);

export default router;

// Pass the :id to grab the user
