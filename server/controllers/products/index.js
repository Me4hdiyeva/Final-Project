const productSchema = require('../../models/modelsSchema.js');

exports.createProduct = async (req, res) => {
    try {
        const product = new productSchema(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        console.log("Failed to create product", error);
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


