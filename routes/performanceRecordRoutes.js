const express = require("express");
const router = express.Router();
const {
  createPerformanceRecord,
  getPerformanceRecords,
  updatePerformanceRecord,
  deletePerformanceRecord,
} = require("../controllers/performanceRecordController");
const auth = require("../middleware/authMiddleware");


router.post("/", auth(["admin", "manager"]), createPerformanceRecord);
router.get("/", auth(["admin", "manager"]), getPerformanceRecords); 
router.put("/:id", auth(["admin", "manager"]), updatePerformanceRecord);
router.delete("/:id", auth(["admin", "manager"]), deletePerformanceRecord);

module.exports = router;
