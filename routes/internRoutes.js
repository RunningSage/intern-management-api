const express = require("express");
const router = express.Router();
const {
  createIntern,
  getInterns,
  updateIntern,
  deleteIntern,
  getInternById
} = require("../controllers/internController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth(["admin", "manager"]), createIntern);
router.get("/", auth(["admin", "manager", "intern"]), getInterns);
router.get("/:id", auth(["admin", "manager"]), getInternById);
router.put("/:id", auth(["admin", "manager"]), updateIntern);
router.delete("/:id", auth(["admin", "manager"]), deleteIntern);

module.exports = router;
