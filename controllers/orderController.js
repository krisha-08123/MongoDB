const Order = require("../models/Order");

exports.getAllOrders = async (req, res, next) => {
    try {
        const orders = await Order.find()
            .populate("userId")
            .populate("items.productId");

        res.json(orders);
    } 
    catch (error) {
        next(error);
    }
};

exports.getOrderById = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id)
            .populate("userId")
            .populate("items.productId");

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.json(order);
    } 
    catch (error) {
        next(error);
    }
};

exports.createOrder = async (req, res, next) => {
    try {
        const order = await Order.create(req.body);
        res.status(201).json(order);
    } 
    catch (error) {
        next(error);
    }
};

exports.deleteOrder = async (req, res, next) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.json({ message: "Order deleted" });
    } 
    catch (error) {
        next(error);
    }
};