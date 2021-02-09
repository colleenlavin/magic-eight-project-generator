import express from 'express';
import aesthetics from '../lib/aesthetics.js'

const router = express.Router();



router.get('/', (req,res) =>{
    res.send(aesthetics);
});

export default router;