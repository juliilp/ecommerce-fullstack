import { Schema } from "mongoose";
import { UserInterface } from "../interfaces/User";

const User = new Schema<UserInterface>({
  email: {
    type: String,
    unique: true,
    required: true,
    match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
  },
  emailValidateCode: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
  },
  isBaneable: {
    type: Boolean,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userEmailValidate: {
    type: Boolean,
  },
});
