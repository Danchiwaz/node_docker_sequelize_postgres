const express = require("express");
const router = require("./routes/dev.routes");
const userRoutes = require("./routes/users.routes");
const User = require("./models/users.model");
const sequelize = require("./util/database");

const app = express();

app.use(express.json());
const PORT_NUMBER = 300;

// setting configurations for the application using the middleware
app.use((req, res, next) => {
  res.setHeader("Access-control-Allow-Origin", "*");
  res.setHeader("Access-control-Allow-Methods", "GET", "POST", "PUT", "DELETE");
  next();
});

app.use("/api", router);
app.use("/api/users", userRoutes);

const PORT = process.env.EXTERNAL_PORT || 3000;

(async () => {
  try {
    await sequelize.sync({
      force: false,
    });
    app.listen(PORT, () => {
      console.log(`server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
})();
