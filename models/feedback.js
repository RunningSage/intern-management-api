const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  internId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Intern",
    required: true,
  },
  feedback: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Feedback", feedbackSchema);
