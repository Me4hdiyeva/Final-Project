const express = require('express');
const { createUser, getUsers, loginUsers, deleteAllUsers, getUserById } = require('../controllers/controllers.js');
const { authenticateToken } = require('../middleware/verifyToken.js');
const passport = require('passport');

const router = express.Router();

// router.get('/deluser', deleteAllUsers);

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/register', createUser);
router.post('/login', loginUsers);

router.get("/verify-token", authenticateToken, (req, res) => {
    try {
        res.status(200).send({ message: 'Token təstiqləndi!', status: true, user_id: req.user._id, username: req.user.username });
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.json({ message: "Logged in successfully!", user: req.user.user, token: req.user.token });
    }
);



module.exports = router