const PerformanceRecord = require("../models/performanceRecord");

exports.createPerformanceRecord = async (req, res) => {
  try {
    const performanceRecord = new PerformanceRecord(req.body);
    await performanceRecord.save();
    res.status(201).json(performanceRecord);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.getPerformanceRecords = async (req, res) => {
  try {
    const { internId, startDate, endDate } = req.query;

    const query = {};
    if (internId) query.internId = internId;
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        return res.status(400).json({ msg: "Invalid date format" });
      }
      query.date = { $gte: start, $lte: end };
    }

    const records = await PerformanceRecord.find(query);
    res.status(200).json({ success: true, data: records });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.updatePerformanceRecord = async (req, res) => {
  try {
    const record = await PerformanceRecord.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!record) return res.status(404).json({ msg: "Record not found" });
    res.json(record);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.deletePerformanceRecord = async (req, res) => {
  try {
    const record = await PerformanceRecord.findByIdAndDelete(req.params.id);
    if (!record) return res.status(404).json({ msg: "Record not found" });
    res.json({ msg: "Record removed" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
