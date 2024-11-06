const express = require('express');
const router = express.Router();

const auth = function(req, res, next){

    req.user = {id:"1", role:"student"};

    if(req.user){
        next();
    }
    else{
        res.status(401).send({
            success:false,
            message:"You are not authorized"
    });
    }
}

const admin = function(req, res, next){
    if(req.user.role === "admin"){
        next();
    }
    else{
        res.status(401).send({
            success:false,
            message:"You are not ADMIN"
        })
    }
}

const isStudent = function(req, res, next){
    if(req.user.role === "student"){
        next();
    }
    else{
        res.status(401).send({
            success:false,
            message:"You are not a student"
        })
    }
}

router.get('/student', auth,isStudent, (req, res) => {
    res.send("These is the get request for student roles")
});

router.get('/admin', auth, admin, (req, res) => {
    res.send("These is the get request for roles")
}   );

module.exports = router;