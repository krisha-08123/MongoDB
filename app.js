const express = require('express');
const app = express();

app.use(express.json());

// Routes
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/cart', cartRoutes);
app.use('/orders', orderRoutes);

// Global Error Handler
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
