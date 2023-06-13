const express = require("express");
const app = express();
const db = require("./utils/database");
require("dotenv").config();
const initModels = require("./models/initModels");
const apiRoutes = require("./routes/index");

const PORT = 8000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));

app.use(express.json());
initModels();
apiRoutes(app);

// db.authenticate()
//   .then(() => console.log("Database authenticated"))
//   .catch((error) => console.error(error));

// db.sync()
//   .then(() => console.log("Database synchronized"))
//   .catch((error) => console.error(error));
