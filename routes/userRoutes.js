const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Rutas
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/verifytoken', authMiddleware, userController.verifyToken); 
router.put('/update', authMiddleware, userController.updateUser);

module.exports = router;
