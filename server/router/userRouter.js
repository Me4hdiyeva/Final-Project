const express = require('express');
const { createUser, getUsers, loginUsers, deleteAllUsers, getUserById, editByUser } = require('../controllers/controllers.js');
const { authenticateToken } = require('../middleware/verifyToken.js');
const passport = require('passport');
const { deleteUserById, userNickname, userEmail, userPassword, profileImg } = require('../controllers/user/index.js');
const router = express.Router();
// router.get('/deluser', deleteAllUsers);

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', editByUser);
router.put('/users/username/:id', userNickname);
router.put('/users/profileImg/:id', profileImg);
router.put('/users/useremail/:id', userEmail);
router.put('/users/password/:id', userPassword);
router.delete('/users/:id', deleteUserById);
router.post('/register', createUser);
router.post('/login', loginUsers);

router.get("/verify-token", authenticateToken, (req, res) => {
    try {
        res.status(200).send({
            message: 'Token təstiqləndi!',
            status: true,
            user_id: req.user._id,
            username: req.user.username,
            balance: req.user.balance,
            profileImage: req.user.profileImage
        });
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        const redirectURL = `http://localhost:5173/dashboard?token=${req.user.token}`;
        res.redirect(redirectURL);
    }
);




module.exports = router