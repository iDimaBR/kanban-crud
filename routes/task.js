const express = require("express");
const router = express.Router();
const taskController = require("../controllers/TaskController");

router.get("/", taskController.getAllTasks);
router.get("/:id", taskController.findTask);
router.post("/create", taskController.createTask);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

module.exports = router;
