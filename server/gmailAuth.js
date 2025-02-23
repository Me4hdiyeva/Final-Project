const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("./models/modelsSchema");
const jwt = require("jsonwebtoken");

passport.use(
    new GoogleStrategy(
        // {
        //     clientID: process.env.GOOGLE_CLIENT_ID,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        //     callbackURL: process.env.GOOGLE_REDIRECT_URI,
        // },
        {
            clientID: "187050017878-eq10cvllner6ia953ahtjebqnh7267v6.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: "http://localhost:3000/api/auth/google/callback",
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                let user = await User.findOne({ email: profile.emails[0].value });

                if (user) {
                    user.accessToken = accessToken
                    user.save()
                }
                else {

                    user = new User({
                        username: profile.displayName,
                        email: profile.emails[0].value,
                        password: "google-auth",
                        profileImage: "/",
                        accessToken
                    });

                    await user.save();
                }

                const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "3h" });

                return done(null, { user, token });
            } catch (err) {
                console.error("Google Auth Error:", err);
                return done(err, null);
            }
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
