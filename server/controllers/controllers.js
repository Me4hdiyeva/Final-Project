const { createProduct, getProducts } = require("./products");
const { getOrders, createOrder } = require("./orders");
const { createUser, getUsers, loginUsers, deleteAllUsers } = require("./user");

module.exports = { createUser, getUsers, loginUsers,deleteAllUsers, createProduct, getProducts, getOrders, createOrder }