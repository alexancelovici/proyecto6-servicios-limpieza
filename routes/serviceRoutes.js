const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const authMiddleware = require('../middleware/authMiddleware');

// Rutas
router.post('/create', authMiddleware, serviceController.createService);
router.get('/readall', serviceController.getAllServices);
router.get('/readone/:id', serviceController.getServiceById);
router.put('/update/:id', authMiddleware, serviceController.updateService);
router.delete('/delete/:id', authMiddleware, serviceController.deleteService);

module.exports = router;
