const User = require('../models/modelsSchema');
const jwt = require("jsonwebtoken")
const authenticateToken = async (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token tapılmadı' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(404).json({ message: 'İstifadəçi tapılmadı' });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Token etibarsızdır', error: error.message });
    }
};

module.exports = { authenticateToken }
