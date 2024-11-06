let { Schema, model } = require("mongoose");

let profileSchema = new Schema(
  {
    username: String,
    bio: String,
    address: String,
    status: String,
    profilePic: String,
    user: {
      type: Schema.Types.ObjectId,
      path: "user_taskManeger",
    },
  },
  { timestamps: true }
);

let Profile = model("profile_taskMUser", profileSchema);
module.exports = Profile;
