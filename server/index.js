const express = require('express');
const app = express();
require('dotenv/config');
const path = require("path")
const cors = require('cors');
app.use(cors());
app.use(express.json());
const { default: mongoose } = require('mongoose');
require("./gmailAuth");
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
const session = require("express-session");
app.use(session({
  secret: process.env.JWT_SECRET_KEY,
  resave: false,
  saveUninitialized: true
}));

const passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());

const { userRouter, uploadRouter, currencyRouter } = require('./router/routers');

app.use('/api/auth', userRouter);
app.use('/api/', uploadRouter);
app.use('/api/', currencyRouter);

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Failed to connect to MongoDB:", error));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
