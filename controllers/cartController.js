const Cart = require("../models/Cart");

exports.getCart = async (req, res, next) => {
    try {
        const cart = await Cart.find()
            .populate("userId")
            .populate("productId");

        res.json(cart);
    } 
    catch (error) {
        next(error);
    }
};

exports.addToCart = async (req, res, next) => {
    try {
        const item = await Cart.create(req.body);
        res.status(201).json(item);
    } 
    catch (error) {
        next(error);
    }
};

exports.updateCartItem = async (req, res, next) => {
    try {
        const item = await Cart.findByIdAndUpdate(
            req.params.id,
            { quantity: req.body.quantity },
            { new: true }
        );

        if (!item) {
            return res.status(404).json({ message: "Cart item not found" });
        }

        res.json(item);
    } 
    catch (error) {
        next(error);
    }
};

exports.deleteCartItem = async (req, res, next) => {
    try {
        const item = await Cart.findByIdAndDelete(req.params.id);

        if (!item) {
            return res.status(404).json({ message: "Cart item not found" });
        }

        res.json({ message: "Cart item removed" });
    } 
    catch (error) {
        next(error);
    }
};