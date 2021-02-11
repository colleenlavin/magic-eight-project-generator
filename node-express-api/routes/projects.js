import express from 'express';
import projects from '../lib/projects.js'

const router = express.Router();

var randProj ;


router.get('/', (req,res) =>{
    randProj = projects[Math.floor(Math.random() * (projects.length))];
    res.send(randProj);
});

export default router;