const Service = require('../models/serviceModel');

// Crear servicio
exports.createService = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const service = await Service.create({ name, description, price, user: req.user.id });
    res.status(201).json({ msg: 'Service created', service });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Leer todos los servicios
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json({ services });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Leer un servicio específico
exports.getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ msg: 'Service not found' });
    res.json({ service });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Actualizar servicio
exports.updateService = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const service = await Service.findByIdAndUpdate(req.params.id, { name, description, price }, { new: true });
    res.json({ msg: 'Service updated', service });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Eliminar servicio
exports.deleteService = async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Service deleted' });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
