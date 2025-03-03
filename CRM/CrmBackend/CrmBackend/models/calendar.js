const db = require("mongoose");
const calendarSchema = new db.Schema(
  {
    agent: {
      type: db.Types.ObjectId,
      required: true,
    },
    recordId: {
      type: db.Types.ObjectId,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    date: {
      type: String,
      default: Date,
    },
    infoId: {
      type: db.Types.ObjectId,
    },
  },
  { timestamps: true }
);

const calendar = db.model("calendar", calendarSchema);
module.exports = { calendar };
