const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("These is the get request for items")
});

router.get('/:id', (req , res)=>{
    res.send(`Item ${req.params.id}`);
})
router.put('/:id', (req, res)=>{
    res.send({"These is th eput request for item": req.params.id})
})
router.delete('/:id', ( req, res)=>{
    res.send({"These is the delete rewquest for items": req.params.id});
})

module.exports = router;