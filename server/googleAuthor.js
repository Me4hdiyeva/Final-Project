const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./models/modelsSchema'); // Əgər Mongoose modeli varsa

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  }, async (accessToken, refreshToken, profile, done) => {
    // Burada istifadəçinin profilini saxlayın və ya doğrulayın
    // Misal üçün:
    const user = await User.findOne({ googleId: profile.id });
    if (user) {
      return done(null, user);
    } else {
      const newUser = new User({
        googleId: profile.id,
        username: profile.displayName,
        email: profile.emails[0].value,
      });
      await newUser.save();
      return done(null, newUser);
    }
  }));
  
  // const User = require('../models/userModel');
  const bcrypt = require('bcrypt');
  const jwt = require('jsonwebtoken');
  
  exports.loginUser = async (req, res) => {
      try {
          const { email, password } = req.body;
          
          // İstifadəçi email ilə tapılır
          const user = await User.findOne({ email });
          if (!user) {
              return res.status(400).json({ message: "İstifadəçi tapılmadı!" });
          }
  
          // Şifrənin doğrulanması
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
              return res.status(400).json({ message: "Şifrə yanlışdır!" });
          }
  
          // Token yaradılır (JWT ilə)
          const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  
          res.json({ message: "Giriş uğurla tamamlandı!", token, user });
  
      } catch (error) {
          console.error("Login xətası:", error);
          res.status(500).json({ message: "Server xətası" });
      }
  };
  

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});
