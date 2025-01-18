const express = require("express");
require("dotenv").config();
const cors = require("cors");
require("./models/db");
const app = express();

//routers
const usersRouter = require("./routes/userRouter");

//built-in middleware
app.use(express.json());
app.use(cors());

// router middleware
app.use("/users", usersRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
