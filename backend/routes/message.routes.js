import express from "express"
import {sendMessage, getMessage} from "../controllers/messae.controller.js"
import protectedRoute from "../middleware/protectRoute.js"


const router = express.Router()

router.post("/send/:id",protectedRoute,sendMessage)
router.get("/:id",protectedRoute,getMessage)

export default router