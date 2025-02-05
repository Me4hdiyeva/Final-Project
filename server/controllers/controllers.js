const userSchema = require('../models/modelsSchema.js');
const productSchema = require('../models/modelsSchema.js');
const orderSchema = require('../models/modelsSchema.js');


exports.createUser = async (req, res) => {
    try {
        console.log(req.body);
        
        const user = new userSchema(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        console.log("Failed to create user", error);
    }
}

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

