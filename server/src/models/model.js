import mongoose from "mongoose";
import dotenv from "dotenv";

import userSchema from "./userSchema.js";
import orgSchema from "./orgSchema.js";
import boardSchema from "./boardSchema.js";
import issueSchema from "./issueSchema.js";
import permissionSchema from "./permissionSchema.js";
import memberSchema from "./memberSchema.js";

dotenv.config();

const DATABASE_URI = process.env.DATABASE_URI;

mongoose.connect(DATABASE_URI);

const Orgs = mongoose.model("Org", orgSchema);
const Boards = mongoose.model("Board", boardSchema);
const Issues = mongoose.model("Issue", issueSchema);
const Permissions = mongoose.model("Permission", permissionSchema);
const Users = mongoose.model("User", userSchema);
const Members = mongoose.model("Member", memberSchema);

export { Orgs, Boards, Issues, Permissions, Users, Members };
