const mongoose = require("mongoose");

const performanceRecordSchema = new mongoose.Schema({
  internId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Intern",
    required: true,
  },
  performanceMetrics: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("PerformanceRecord", performanceRecordSchema);
