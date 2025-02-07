const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
// const cookieSession = require("cookie-session");
const session = require("express-session");
const passport = require("passport");
require("./googleAuthor"); // Passport konfiqurasiyasını burada daxil edirik
const userRouter = require('./router/routers');
const authRouter = require('./router/routers');
require("./googleAuthor");

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());
app.use('/auth', authRouter);
// app.use(cookieSession({
//     name: "session",
//     keys: [process.env.SESSION_SECRET],
//     maxAge: 24 * 60 * 60 * 1000
// }));

app.use(session({
    secret: 'your-session-secret',  // secret olmalı və təhlükəsiz olmalıdır
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }  // HTTPS istifadə edirsinizsə, true edin
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', userRouter);
app.use('/auth', authRouter);
const authRoutes = require('./router/routers');
app.use('/api/auth', authRoutes);


mongoose.connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Failed to connect to MongoDB:", error));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
