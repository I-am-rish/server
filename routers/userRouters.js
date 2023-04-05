const express = require('express');
const { addUser, getUser } = require('../controllers/userControllers');
const router = express.Router();



router.get('/', getUser)

router.post('/', addUser);
router.put('/',)
router.delete('/',)

module.exports = router;