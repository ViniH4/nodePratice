const dotenv = require("dotenv");
dotenv.config();

const connectToDatabase = require("./src/database/connect.js");
connectToDatabase();

require("./modules/express.js");
