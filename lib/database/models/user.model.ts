import { Schema } from "mongoose";
import { model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: false,
    unique: true,
  },
  username: {
    type: String,
    required: false,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: false,
  },
});

const User = models.User || model("User", UserSchema);

export default User;
