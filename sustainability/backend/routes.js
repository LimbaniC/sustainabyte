import express from "express"; 
//import { createFood } from "../backend/controllers/foodController.js";

import { createFood, getFood, updateFood, deleteFood } from "../backend/controllers/foodController.js";

const router = express.Router(); 

router.post("/addFood", createFood );
router.get("/food", getFood); 
router.put("/updateFood", updateFood); 
router.delete("/deleteFood", deleteFood); 

export default router; 
