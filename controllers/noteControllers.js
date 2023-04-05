const Notes = require('../models/noteModels');

module.exports.addNote = (req, res) => {
    try{
        Notes.insertMany(req.body);
        res.end('note added');
    }catch(err){
        res.json({msg:"error while adding note"});
    }
};

module.exports.getNotes = (req, res) => {
    try{
        Notes.find()
        .then((data) => {
            res.send(data);
        })
    }catch(err){
        res.json({msg:"error while getting notes"})
    }
};

module.exports.updateNote = (req, res) => {
    try{
        const{oldTitle, newNoteValue} = req.body;
        console.log(oldTitle);
        console.log(newNoteValue);
        Notes.updateMany({title: oldTitle}, newNoteValue)
        .then(data => {
            // console.log(data);
            res.end();
        })

    }catch(err){
        res.json({msg: 'error while updating note'});
    }
}

module.exports.deleteNote = (req, res) => {
    try{
        const query = req.url.substring(1);
        Notes.deleteOne({title: `${query}`})
        .then((data) => {
            // console.log(data);
            res.end("note deleted");
        })

    }catch(err){
        res.json({msg:"error while deleting note"})
    }
};