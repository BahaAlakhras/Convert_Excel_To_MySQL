const express = require("express");
const multer = require("multer");

const {
  getAllUser,
  postUserFromExcel,
} = require("../controllers/userControllers");

const usersRouter = express.Router();

// get all users
usersRouter.get("/all", getAllUser);

// Multer middleware for file uploads
//  const upload = multer({ dest: "../uploads/users.xlsx" }); // Files will be stored in the `uploads` directory

// Route to handle Excel file upload
// usersRouter.post("/import-excel", upload.single("file"), postUserFromExcel);
usersRouter.post("/import-excel", postUserFromExcel);

module.exports = usersRouter;
