const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Obtener todos los contactos
router.get('/', async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

// Obtener contacto por ID
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Contacto no encontrado' });
    res.json(contact);
  } catch (err) {
    res.status(400).json({ message: 'ID inválido' });
  }
});

module.exports = router;