import express from 'express';
import cors from 'cors';

import extractSkillRoute from './routes/extractSkills.routes.js'

const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json())
app.use('/api/v1/extract_skills', extractSkillRoute)

app.listen(PORT, () => {
    console.log("Listening to port ", PORT);
    
})