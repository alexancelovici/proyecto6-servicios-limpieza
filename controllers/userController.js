const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Registro
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ msg: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    res.status(201).json({ msg: 'User registered', user });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Login
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Verificar token
exports.verifyToken = (req, res) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ verified });
  } catch (err) {
    res.status(400).json({ msg: 'Token is not valid' });
  }
};

// Actualizar usuario
exports.updateUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const updatedData = { name, email };
    if (password) {
      updatedData.password = await bcrypt.hash(password, 10);
    }
    const user = await User.findByIdAndUpdate(req.user.id, updatedData, { new: true });
    res.json({ msg: 'User updated', user });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
