const Feedback = require("../models/feedback");

exports.createFeedback = async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json(feedback);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.getFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find({ internId: req.params.internId });
    res.json(feedback);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.updateFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!feedback) return res.status(404).json({ msg: "Feedback not found" });
    res.json(feedback);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.deleteFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findByIdAndDelete(req.params.id);
    if (!feedback) return res.status(404).json({ msg: "Feedback not found" });
    res.json({ msg: "Feedback removed" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
