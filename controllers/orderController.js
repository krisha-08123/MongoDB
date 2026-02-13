// This is a fake in-memory database.
let orders = [];

exports.getAllOrders = (req, res) => {
    res.json(orders);
};

exports.getOrderById = (req, res, next) => {
    const id = parseInt(req.params.id);
    const order = orders.find(o => o.id === id);

    if (!order) {
        const error = new Error("Order not found");
        error.status = 404;
        return next(error);
    }

    res.json(order);
};

exports.createOrder = (req, res) => {
    const newOrder = {
        id: orders.length + 1,
        userId: req.body.userId,
        items: req.body.items,
        totalAmount: req.body.totalAmount
    };

    orders.push(newOrder);
    res.status(201).json(newOrder);
};

exports.deleteOrder = (req, res) => {
    const id = parseInt(req.params.id);
    orders = orders.filter(o => o.id !== id);

    res.json({ message: "Order deleted" });
};
