import express from 'express'; 
import languages from "../lib/languages.js"

const router = express.Router();
var randomLang;

router.get('/', (req,res) =>{
    randomLang = languages[Math.floor(Math.random() * (languages.length))];
    res.send(randomLang);
});

export default router;