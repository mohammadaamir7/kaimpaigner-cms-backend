exports.Auth = require("./auth/user.controller");
exports.DailyTasks = require("./dailyTasks/task.controller");
exports.Compaigns = require("./compaign/compaign.controller")
exports.Middleware = require("./middleware/auth")

exports.App = {
  PNF: (req, res) => {
    res.status(400).json({
      message: "invalid routes",
    });
  },
};
