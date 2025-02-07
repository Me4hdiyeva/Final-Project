const express = require('express');
const { createUser, createProduct, createOrder, getOrders, getProducts, getUsers } = require('../controllers/controllers.js');

const router = express.Router();
// 
const passport = require('passport');

// POST routes for creating user, product, order
router.post('/user', createUser);
router.post('/product', createProduct);
router.post('/order', createOrder);

// GET routes for fetching users, products, orders
router.get('/users', getUsers);
router.get('/products', getProducts);
router.get('/orders', getOrders);



router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

// Google Auth callback
router.get("/google/callback", passport.authenticate("google", {
    successRedirect: process.env.SUCCESS_REDIRECT_URL,
    failureRedirect: "/auth/login/failed",
}));

// Login uğurlu olduqda
router.get("/login/success", (req, res) => {
    if (req.user) {
        res.json({
            success: true,
            message: "User authenticated",
            user: req.user
        });
    } else {
        res.status(401).json({ success: false, message: "Not authenticated" });
    }
});

// Login uğursuz olduqda
router.get("/login/failed", (req, res) => {
    res.status(401).json({
        success: false,
        message: "Failed to log in"
    });
});

// Logout
router.get("/logout", (req, res) => {
    req.logout(() => {
        res.redirect("http://localhost:3000/");
    });
});

// const express = require('express');
const { loginUser } = require('../googleAuthor.js');

// const router = express.Router();

router.post('/login', loginUser);

module.exports = router;



module.exports = router;
