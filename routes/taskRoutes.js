const express = require("express");
const router = express.Router();
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth(["admin", "manager"]), createTask);
router.get("/:internId", auth(["admin", "manager"]), getTasks);
router.put("/:id", auth(["admin", "manager"]), updateTask);
router.delete("/:id", auth(["admin", "manager"]), deleteTask);

module.exports = router;
