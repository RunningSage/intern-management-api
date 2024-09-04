const express = require("express");
const router = express.Router();
const {
  createFeedback,
  getFeedback,
  updateFeedback,
  deleteFeedback,
} = require("../controllers/feedbackController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth(["admin", "manager"]), createFeedback);
router.get("/:internId", auth(["admin", "manager"]), getFeedback);
router.put("/:id", auth(["admin", "manager"]), updateFeedback);
router.delete("/:id", auth(["admin", "manager"]), deleteFeedback);

module.exports = router;
