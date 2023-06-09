const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: [false],
      minlength: [4, 'username must have at least 4 letters']
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required.'],
      minlength: [6, 'Password must have at least 6 characters']
    },
    firstName: {
      type: String,
      required: [true, 'First name is required.']
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required.']
    },
    currentInstitution: {
      type: String,
      required: [false]
    },
    collaboratorDetail: {
      type: String,
      required: [false]
    },

    userRole: [{
      type: String,
      enum: ["Visitor", "Collaborator", "Admin"],
      required: [true, 'User role is required.'],
      default: "Visitor"
    }],

    avatar: {
      type: String,
      default: "https://64.media.tumblr.com/f91228fd0b240d0535110b59e68f1484/151be060c4113eab-b8/s540x810/13257972f2ac364e169191d4b5765ae4a2d3989f.pnj",
      set: value => value === '' ? 'https://64.media.tumblr.com/f91228fd0b240d0535110b59e68f1484/151be060c4113eab-b8/s540x810/13257972f2ac364e169191d4b5765ae4a2d3989f.pnj' : value
    },
    favoriteBibles: [{
      type: Schema.Types.ObjectId,
      ref: "Bible",
    }],
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;