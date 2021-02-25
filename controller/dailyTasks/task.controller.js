// const DailyMessSchema = require("../../modal/dailyMessageSchema");
// const DailyChannelSchema = require("../../modal/dailyMessageSchema");
const dailyMessageSchema = require("../../modal/dailyMessageSchema");
require("../../modal/selectMessageSchema");
module.exports.dailySchema = async (req, res) => {
  try {
    const DailyMsg = await dailyMessageSchema.findOne({
      _id: req.params.dailyMessageID,
    });

    res.send({ ok: true });

    const MessContent = {
      title: req.body.title,
      description: req.body.description,
    };

    // MessContent.dailyAddMessage.push(req.body.dailyAddMessage);

    // const DailyMess = new DailyMessSchema(MessContent);

    // DailyMess.save()
    //   .then((data) =>
    //     res.json({ message: "Data successfully sve in DB", data })
    //   )
    //   .catch((error) =>
    //     res.json({
    //       message: "Error While Post ata in DB",
    //       error,
    //     })
    //   );
  } catch (error) {
    return res.json({ message: "internal server error", status: 500 });
  }
};
