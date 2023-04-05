const express = require('express');
const { addNote, getNotes, deleteNote, updateNote } = require('../controllers/noteControllers');
const router = express.Router();

router.get('/', getNotes);

router.post('/', addNote);

router.put('/', updateNote);

router.delete('/:id', deleteNote);

module.exports = router;