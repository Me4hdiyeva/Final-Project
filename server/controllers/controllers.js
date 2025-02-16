const userSchema = require('../models/modelsSchema.js');
const productSchema = require('../models/modelsSchema.js');
const orderSchema = require('../models/modelsSchema.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



exports.createUser = async (req, res) => {
    const validatePassword = (password) => {
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordPattern.test(password);
      };
    const { username, email, password } = req.body;
   // Boşluq yoxlaması
   if (!username || !email || !password) {
    return res.status(400).json({ message: 'Please provide username, email, and password.' });
  }



  // Şifrənin düzgünlüyünü yoxlamaq
  if (!validatePassword(password)) {
    return res.status(400).json({ message: 'Password must be at least 8 characters long, contain one uppercase letter, one number, and one special character.' });
  }

      try {
        // Parol şifrələyirik
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // Yeni istifadəçi yaradırıq
        const newUser = new userSchema({
          username,
          email,
          password: hashedPassword,
          createdAt: new Date(),
        });
    
        // Verilənlər bazasında istifadəçini saxlayırıq
        await newUser.save();
    
        res.status(201).json({ message: 'User created successfully!' });
      } catch (error) {
        console.error('Error during user creation:', error);
        res.status(500).json({ message: 'Failed to create user', error });
      }
}

exports.loginUsers = async (req, res) => {
    const { username, password } = req.body;
  
    // İstifadəçi adı və şifrə yoxlaması
    if (!username || !password) {
      return res.status(400).json({ message: 'Please provide username and password.' });
    }
  
    try {
        const user = await User.findOne({ username });
        if (!user) {
          return res.status(400).json({ message: 'Invalid username or password' });
        }
      
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(400).json({ message: 'Invalid username or password' });
        }
      
        const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });
        res.json({ token });
      } catch (err) {
        console.error(err); // Səhv mesajını konsola yazdırırıq
        res.status(500).json({ message: 'Server error' });
      }
      
  };

exports.createProduct = async (req, res) => {
    try {
        const product = new productSchema(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        console.log("Failed to create product", error);
    }
}

exports.createOrder = async (req, res) => {
    try {
        const order = new orderSchema(req.body);
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        console.log("Failed to create order", error);
    }
}


exports.getUsers = async (req, res) => {
    try {
        const users = await userSchema.find();
        res.status(200).json(users);
    } catch (error) {
        console.log("Failed to fetch users", error);
    }
}


exports.getProducts = async (req, res) => {
    try {
        const products = await productSchema.find();
        res.status(200).json(products);
    } catch (error) {
        console.log("Failed to fetch products", error);
    }
}

exports.getOrders = async (req, res) => {
    try {
        const orders = await orderSchema.find();
        res.status(200).json(orders);
    } catch (error) {
        console.log("Failed to fetch orders", error);
    }
}

