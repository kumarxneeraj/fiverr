import express from "express";
import {deleteUser} from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/jwt.js";
import {createReview,getReviews,deleteReview} from "../controllers/review.controller.js"


const router=express.Router();

router.post("/" ,verifyToken,createReview);
router.get("/:gigId",getReviews);
router.get("/:id" ,deleteReview);




export default router;
