let { Schema, model } = require("mongoose");

let taskSchema = new Schema(
  {
    title: String,
    des: String,
    startD: String,
    endD: String,
    complete: Boolean,
    important: Boolean,
    user: {
      type: Schema.Types.ObjectId,
      ref: "user_taskManeger",
    },
  },
  { timestamps: true }
);

let Task = model("task", taskSchema);
module.exports = Task;
