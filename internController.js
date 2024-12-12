const Intern = require('../models/intern');

// Create intern
const createIntern = async (req, res) => {
  const { name, contact, department, startDate, endDate } = req.body;

  try {
    const newIntern = new Intern({ name, contact, department, startDate, endDate });
    await newIntern.save();
    res.status(201).json(newIntern);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Retrieve interns
const getInterns = async (req, res) => {
  const { department, status } = req.query;

  try {
    const filters = {};
    if (department) filters.department = department;
    if (status) filters.status = status;

    const interns = await Intern.find(filters);
    res.status(200).json(interns);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update intern
const updateIntern = async (req, res) => {
  const { internId } = req.params;
  const updateData = req.body;

  try {
    const updatedIntern = await Intern.findByIdAndUpdate(internId, updateData, { new: true });
    if (!updatedIntern) {
      return res.status(404).json({ message: 'Intern not found' });
    }
    res.status(200).json(updatedIntern);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete intern
const deleteIntern = async (req, res) => {
  const { internId } = req.params;

  try {
    const deletedIntern = await Intern.findByIdAndDelete(internId);
    if (!deletedIntern) {
      return res.status(404).json({ message: 'Intern not found' });
    }
    res.status(200).json({ message: 'Intern deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createIntern, getInterns, updateIntern, deleteIntern };
