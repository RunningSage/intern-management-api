const Feedback = require('../models/Feedback');
const APIFeatures = require('../utils/apiFeatures');

exports.createFeedback = async (req, res, next) => {
  try {
    const feedback = await Feedback.create({
      ...req.body,
      userId: req.user.id
    });

    res.status(201).json({
      success: true,
      data: feedback
    });
  } catch (err) {
    next(err);
  }
};

exports.getFeedbacks = async (req, res, next) => {
  try {
    const features = new APIFeatures(Feedback.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const feedbacks = await features.query;

    res.status(200).json({
      success: true,
      count: feedbacks.length,
      data: feedbacks
    });
  } catch (err) {
    next(err);
  }
};

exports.getFeedback = async (req, res, next) => {
  try {
    const feedback = await Feedback.findById(req.params.id);

    if (!feedback) {
      return res.status(404).json({
        success: false,
        message: 'Feedback not found'
      });
    }

    res.status(200).json({
      success: true,
      data: feedback
    });
  } catch (err) {
    next(err);
  }
};

exports.updateFeedback = async (req, res, next) => {
  try {
    let feedback = await Feedback.findById(req.params.id);

    if (!feedback) {
      return res.status(404).json({
        success: false,
        message: 'Feedback not found'
      });
    }

    feedback = await Feedback.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      data: feedback
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteFeedback = async (req, res, next) => {
  try {
    const feedback = await Feedback.findById(req.params.id);

    if (!feedback) {
      return res.status(404).json({
        success: false,
        message: 'Feedback not found'
      });
    }

    await feedback.remove();

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    next(err);
  }
};