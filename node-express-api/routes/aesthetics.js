import express from 'express';
import aesthetics from '../lib/aesthetics.js'

const router = express.Router();

var randomAes;

router.get('/', (req,res) =>{
    randomAes = aesthetics[Math.floor(Math.random() * (aesthetics.length))];
    res.send(randomAes);
});

export default router;