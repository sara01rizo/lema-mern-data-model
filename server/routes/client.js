import express from 'express';
import { getProducts, getCustomers, getTransactions, getStatistics, } from "../controllers/client.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);
router.get("/statistics", getStatistics);

export default router;
