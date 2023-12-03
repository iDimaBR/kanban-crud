const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/CategoryController");

router.get("/", categoryController.getAllCategories);
router.post("/create", categoryController.createCategory);
router.put("/:id", categoryController.updateCategory);
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
