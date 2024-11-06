let { Schema, model } = require("mongoose");

let userSchema = new Schema(
  {
    username: String,
    email: String,
    password: String,
    profilePic: String,
    profile: [
      {
        type: Schema.Types.ObjectId,
        ref: "profile_taskMUser",
      },
    ],
    taskAll: [
      {
        type: Schema.Types.ObjectId,
        ref: "task",
      },
    ],
    completedTask: [
      {
        type: Schema.Types.ObjectId,
        ref: "task",
      },
    ],
    deletedTask: [
      {
        type: Schema.Types.ObjectId,
        ref: "task",
      },
    ],
    important: [
      {
        type: Schema.Types.ObjectId,
        ref: "task",
      },
    ],
  },
  { timestamps: true }
);

let User = model("user_taskManeger", userSchema);
module.exports = User;
