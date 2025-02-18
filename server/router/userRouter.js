const express = require('express');
const { createUser, getUsers, loginUsers, deleteAllUsers } = require('../controllers/controllers.js');
const { authenticateToken } = require('../middleware/verifyToken.js');

const router = express.Router();

router.get('/users', getUsers);
router.post('/register', createUser);
router.post('/login', loginUsers);
router.get("/verify-token", authenticateToken, (req, res) => {
    try {
        res.status(200).send({ message: 'Token təstiqləndi!', status: true, user_id: req.user._id, username: req.user.username });
    } catch (error) {
        res.status(500).json(error)
    }
})
// router.get('/deluser', deleteAllUsers);

module.exports = router