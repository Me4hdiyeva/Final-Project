const express = require('express');
const app = express();
require('dotenv/config');
const cors = require('cors');
app.use(cors());
app.use(express.json());
const { default: mongoose } = require('mongoose');
require("./googleAuthor"); // Passport konfiqurasiyasını burada daxil edirik

const session = require("express-session");
app.use(session({
  secret: 'your-session-secret',  // secret olmalı və təhlükəsiz olmalıdır
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }  // HTTPS istifadə edirsinizsə, true edin
}));

const passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());

const {userRouter} = require('./router/routers');

app.use('/api/auth', userRouter);


const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Failed to connect to MongoDB:", error));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
