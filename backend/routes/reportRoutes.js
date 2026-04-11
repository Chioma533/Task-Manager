const express = require("express")
const {
    exportTasksReport,
    exportUsersReport,
} = require("../controllers/reportController");
const { adminOnly, protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/export/tasks", protect, adminOnly, exportTasksReport); // Export all tasks as Excel/PDF
router.get("/export/users", protect, adminOnly, exportUsersReport); // Export user-tasks report

module.exports = router;
