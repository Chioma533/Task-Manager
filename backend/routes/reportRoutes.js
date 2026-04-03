const router = express.Router()
const { exportTasksReport, exportUsersReport } = require("../controllers/reportController");
const { adminOnly } = require("../middleware/authMiddleware");

router.get ("/export/tasks", protect, adminOnly, exportTasksReport) // Export all tasks as Excel/PDF
router.get ("/export/users", protect, adminOnly, exportUsersReport) // Export user-tasks report

module.exports = router;
