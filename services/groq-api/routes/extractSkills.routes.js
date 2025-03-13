import express from 'express'
import { extractSkills } from '../controllers/extractSkills.controller.js'

const router = express.Router()

router.post("/", extractSkills)
export default router