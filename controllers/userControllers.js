const User = require('../models/userModels');

module.exports.addUser = (req,res) => {
    try{
        User.insertMany(req.body);
        res.end("user created");
    }catch(err){
        return res.json({msg: "Error while adding user"})
    }
}

module.exports.getUser = (req, res)=> {
    try{
        User.find()
        .then((data) => {
            res.send(data);
        })

    }catch(err){
        res.json({msg:"error while getting user"})
    }
};