// PRODUCT VALIDATION
exports.validateProduct = (req, res, next) => {
    const { name, price } = req.body;

    if (!name || typeof name !== "string") {
        return res.status(400).json({ message: "Valid product name is required" });
    }

    if (price === undefined || typeof price !== "number") {
        return res.status(400).json({ message: "Valid product price is required" });
    }

    next();
};

// USER VALIDATION
exports.validateUser = (req, res, next) => {
    const { name, email } = req.body;

    if (!name || typeof name !== "string") {
        return res.status(400).json({ message: "Valid name is required" });
    }

    if (!email || typeof email !== "string") {
        return res.status(400).json({ message: "Valid email is required" });
    }

    next();
};

// CART VALIDATION
exports.validateCart = (req, res, next) => {
    const { userId, productId, quantity } = req.body;

    if (!userId || !productId || !quantity) {
        return res.status(400).json({ message: "userId, productId and quantity are required" });
    }

    next();
};

// ORDER VALIDATION
exports.validateOrder = (req, res, next) => {
    const { userId, items, totalAmount } = req.body;

    if (!userId || !items || !Array.isArray(items)) {
        return res.status(400).json({ message: "Valid order items required" });
    }

    if (totalAmount === undefined || typeof totalAmount !== "number") {
        return res.status(400).json({ message: "Valid total amount required" });
    }

    next();
};
