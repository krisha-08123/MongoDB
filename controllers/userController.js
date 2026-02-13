let users = [
    { id: 1, name: "Khushi", email: "khushi@email.com" }
];

exports.getAllUsers = (req, res) => {
    res.json(users);
};

exports.getUserById = (req, res, next) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        const error = new Error("User not found");
        error.status = 404;
        return next(error);
    }

    res.json(user);
};

exports.createUser = (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };

    users.push(newUser);
    res.status(201).json(newUser);
};

exports.updateUser = (req, res, next) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        const error = new Error("User not found");
        error.status = 404;
        return next(error);
    }

    user.name = req.body.name;
    user.email = req.body.email;

    res.json(user);
};

exports.deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    users = users.filter(u => u.id !== id);

    res.json({ message: "User deleted" });
};
