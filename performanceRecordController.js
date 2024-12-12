const PerformanceRecord = require('../models/performanceRecord');

// Add performance record
const addPerformanceRecord = async (req, res) => {
  const { internId, performanceMetrics } = req.body;

  try {
    const newPerformanceRecord = new PerformanceRecord({ internId, performanceMetrics });
    await newPerformanceRecord.save();
    res.status(201).json(newPerformanceRecord);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Retrieve performance records
const getPerformanceRecords = async (req, res) => {
  const { internId } = req.params;

  try {
    const performanceRecords = await PerformanceRecord.find({ internId });
    if (!performanceRecords) {
      return res.status(404).json({ message: 'No performance records found' });
    }
    res.status(200).json(performanceRecords);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update performance record
const updatePerformanceRecord = async (req, res) => {
  const { recordId } = req.params;
  const { performanceMetrics } = req.body;

  try {
    const updatedPerformanceRecord = await PerformanceRecord.findByIdAndUpdate(recordId, { performanceMetrics }, { new: true });
    if (!updatedPerformanceRecord) {
      return res.status(404).json({ message: 'Performance record not found' });
    }
    res.status(200).json(updatedPerformanceRecord);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete performance record
const deletePerformanceRecord = async (req, res) => {
  const { recordId } = req.params;

  try {
    const deletedPerformanceRecord = await PerformanceRecord.findByIdAndDelete(recordId);
    if (!deletedPerformanceRecord) {
      return res.status(404).json({ message: 'Performance record not found' });
    }
    res.status(200).json({ message: 'Performance record deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { addPerformanceRecord, getPerformanceRecords, updatePerformanceRecord, deletePerformanceRecord };
