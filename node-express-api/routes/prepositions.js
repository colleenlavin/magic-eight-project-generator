import express from 'express';
import prepositions from '../lib/prepositions.js'

const router = express.Router();

var randomPrep;

router.get('/', (req,res) =>{
    randomPrep = prepositions[Math.floor(Math.random() * (prepositions.length))];
    res.send(randomPrep);
});

export default router;