require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Importar rutas
const userRoutes = require('./routes/userRoutes');
const serviceRoutes = require('./routes/serviceRoutes');

// Rutas
app.use('/api/user', userRoutes);
app.use('/api/product', serviceRoutes);

// Endpoint de prueba
app.get('/', (req, res) => {
  res.send('API Running');
});

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
