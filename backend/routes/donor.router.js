import {
  getDonors,
  addDonor,
  getDonorHistory,
} from "../controllers/donor.controller.js";
import express from "express";
import { authenticate } from "../middlewares/authMiddleware.js"; 
const router = express.Router();

// Get all donors (admin route or public route)
router.get("/donors", getDonors);

// Add a donation (logged-in users only)
router.post("/donate", authenticate, addDonor);

// Get donation history (logged-in users only)
router.get("/donor-history", authenticate, getDonorHistory);

export default router;
