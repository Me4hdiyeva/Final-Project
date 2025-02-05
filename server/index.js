const express = require('express')
const app = express()
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./router/routers');
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
app.use(cors());
try {
    mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Failed to connect to MongoDB");
}
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
app.use(express.json());
app.use('/api', userRouter);


