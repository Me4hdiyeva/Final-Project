const Order = require('../../models/modelsSchema.js');
// const User = require('../../models/modelsSchema.js');
exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        console.log("Failed to fetch orders", error);
    }
}


exports.createOrder = async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        console.log("Failed to create order", error);
    }
}
