let products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Earbuds", price: 2000}
];

// GET ALL
exports.getAllProducts = (req, res) => {
    res.json(products);
};

// GET BY ID
exports.getProductById = (req, res, next) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);

    if (!product) {
        const error = new Error("Product not found");
        error.status = 404;
        return next(error);
    }

    res.json(product);
};

// CREATE
exports.createProduct = (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
};

// UPDATE
exports.updateProduct = (req, res, next) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);

    if (!product) {
        const error = new Error("Product not found");
        error.status = 404;
        return next(error);
    }

    product.name = req.body.name;
    product.price = req.body.price;

    res.json(product);
};

// DELETE
exports.deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    products = products.filter(p => p.id !== id);

    res.json({ message: "Product deleted" });
};
