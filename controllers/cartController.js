// This is a fake in-memory database -> data lost once restarted
let cart = [];

exports.getCart = (req, res) => {
    res.json(cart);
};

exports.addToCart = (req, res) => {
    const newItem = {
        id: cart.length + 1,
        userId: req.body.userId,
        productId: req.body.productId,
        quantity: req.body.quantity
    };

    cart.push(newItem);
    res.status(201).json(newItem);
};

exports.updateCartItem = (req, res, next) => {
    const id = parseInt(req.params.id);
    const item = cart.find(c => c.id === id);

    if (!item) {
        const error = new Error("Cart item not found");
        error.status = 404;
        return next(error);
    }

    item.quantity = req.body.quantity;
    res.json(item);
};

exports.deleteCartItem = (req, res) => {
    const id = parseInt(req.params.id);
    cart = cart.filter(c => c.id !== id);

    res.json({ message: "Cart item removed" });
};
