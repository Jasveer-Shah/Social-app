const router = require('express').Router()
const bcrypt = require('bcrypt')     // the library that help to encript our password
const User = require('../models/User')

router.post('/register', async(req, res) => {
    try{
         const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            password: hashedPassword
        })
         newUser.save().then((user)=>{
             res.status(200).send(user)
         })
    }
    catch(err){
        res.status(500).send(err)
    }
})


router.post('/login', async(req, res)=>{
    try{
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).send('User does not exist');

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).send("Password incorrect");

        res.status(200).send(user)
    }
    catch(err){
        res.status(500).send(err)
    }
} )

module.exports = router