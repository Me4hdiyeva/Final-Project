const { createProduct, getProducts } = require("./products");
const { getOrders, createOrder } = require("./orders");
const { createUser, getUsers, loginUsers, deleteAllUsers, getUserById, editByUser, userNickname, userEmail, userPassword } = require("./user");
const { addImg } = require("./uploadImg");

module.exports = { createUser, getUserById, getUsers, loginUsers, deleteAllUsers, addImg, createProduct, getProducts, getOrders, createOrder, editByUser, userNickname, userEmail, userPassword }