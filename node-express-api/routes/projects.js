import express from 'express';
import projects from '../lib/projects.js'

const router = express.Router();



router.get('/', (req,res) =>{
    res.send(projects);
});

export default router;