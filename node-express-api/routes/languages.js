import express from 'express'; 
import languages from "../lib/languages.js"

const router = express.Router();


router.get('/', (req,res) =>{
    res.send(languages);
});

export default router;