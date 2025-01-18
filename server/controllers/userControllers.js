const db = require("../models/db");
const xlsx = require("xlsx");

const getAllUser = (req, res) => {
  db.query("SELECT * FROM users")
    .then(([rows]) => {
      res.status(200).json({
        success: true,
        message: "All the users",
        result: rows,
      });
    })
    .catch((err) => {
      console.error("Database Query Error:", err);
      res.status(500).json({
        success: false,
        message: "Server error",
        err: err.message,
      });
    });
};

// const postUserFromExcel = async (req, res) => {
//   try {
//     // Check if a file is uploaded
//     if (!req.file) {
//       return res.status(400).json({
//         success: false,
//         message: "No file uploaded.",
//       });
//     }

//     // Parse the uploaded Excel file
//     const workbook = xlsx.readFile(req.file.path);
//     const sheetName = workbook.SheetNames[0]; // Get the first sheet
//     const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

//     // Validate data format
//     if (!Array.isArray(data) || data.length === 0) {
//       return res.status(400).json({
//         success: false,
//         message: "The Excel sheet is empty or invalid.",
//       });
//     }

//     // Prepare SQL query
//     const query = `INSERT INTO users (id, name, position, address) VALUES ?`;
//     const values = data.map((row) => [
//       row.id || null,
//       row.name,
//       row.position,
//       row.address,
//     ]);

//     // Insert data into the database
//     await db.query(query, [values]);

//     res.status(200).json({
//       success: true,
//       message: "Data imported successfully.",
//     });
//   } catch (err) {
//     console.error("Error importing data:", err);
//     res.status(500).json({
//       success: false,
//       message: "An error occurred while importing data.",
//       error: err.message,
//     });
//   }
// };

// http://localhost:8000/users/import-excel
const postUserFromExcel = async (req, res) => {
  try {
    // File path to the existing Excel file
    const filePath = "uploads/users.xlsx";

    // Parse the Excel file
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0]; // Get the first sheet
    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    // Validate data format
    if (!Array.isArray(data) || data.length === 0) {
      return res.status(400).json({
        success: false,
        message: "The Excel sheet is empty or invalid.",
      });
    }

    // Prepare SQL query
    const query = `INSERT INTO users (id, name, position, address) VALUES ?`;
    const values = data.map((row) => [
      row.id || null,
      row.name,
      row.position,
      row.address,
    ]);

    // Insert data into the database
    await db.query(query, [values]);

    res.status(200).json({
      success: true,
      message: "Data imported successfully.",
    });
  } catch (err) {
    console.error("Error importing data:", err);
    res.status(500).json({
      success: false,
      message: "An error occurred while importing data.",
      error: err.message,
    });
  }
};

module.exports = {
  getAllUser,
  postUserFromExcel,
};
