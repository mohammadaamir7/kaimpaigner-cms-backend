const express = require("express");
const router = express.Router();
const { App, Auth, DailyTasks, Compaigns, Middleware } = require("../controller/index");

// User Registration
router.route("/api/registration").post(Auth.userRegistration);
router.route("/api/login").post(Auth.userLogin);
router.route("/api/dailyMessageID").post(DailyTasks.dailySchema);
router.route("/api/addCompaign").post(Compaigns.addCompaign);
router.route("/api/updateCompaign/:id").post(Compaigns.updateCompaign);
router.route("/api/updateMessage/:id_1/:id_2").post(Compaigns.updateMessage);
router.route("/api/updateProcess").post(Compaigns.updateProcess);
router.route("/api/:id").delete(Compaigns.deleteCompaign);
router.route("/api/deleteProcess/:id").delete(Compaigns.deleteProcess);
router.route("/api/deleteMessage/:id").delete(Compaigns.deleteMessage);
router.route("/api/listCompaign/:username").get(Compaigns.listCompaign);
router.route("/api/listUsers").get(Auth.listUsers);
router.route("/api/:id").get(Compaigns.findCompaign);
router.route("/api/findMessage/:id").get(Compaigns.findMessage);
router.route("/api/findProcess/:id").get(Compaigns.findProcess);
router.route("/api/rangeCompaign").get(Compaigns.rangeCompaign);
router.route("/api/forgotPassword").post(Auth.forgotPassword);
router.route("/api/updatePassword").post(Auth.updatePassword);
router.route("/api/addEvent/:id").post(Compaigns.addEvent);
router.route("/api/addDigitalAdd/:id").post(Compaigns.addDigitalAdd);
router.route("/api/addFieldOperation/:id").post(Compaigns.addFieldOperation);
router.route("/api/addPaidAdvertisement/:id").post(Compaigns.addPaidAdvertisement);
router.route("/api/addOOHAdvertisement/:id").post(Compaigns.addOOHAdvertisement);
router.route("/api/addMailbox/:id").post(Compaigns.addMailbox);
router.route("/api/addResearchPlanning/:id").post(Compaigns.addResearchPlanning);
router.route("/api/addMessage/:id").post(Compaigns.addMessage);
router.route("/api/listEvent/:username").get(Compaigns.listEventUser);
router.route("/api/listMessage/:id").get(Compaigns.listMessage);
router.route("/api/listEvent/:start/:end").get(Compaigns.listEvent);
router.route("/api/countProcess/:username").get(Compaigns.countProcess);
router.route("/api/ganttChart/:username").get(Compaigns.ganttChart);
router.route("/api/IsValidToken").post(Auth.IsValidToken);
router.route("/api/loggedUser").get(Middleware.auth, Auth.LoggedUser);

// 404 Routes
router.route("*").all(App.PNF);

module.exports = router;
