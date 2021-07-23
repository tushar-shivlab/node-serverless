"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    mobileNo: {
        type: String,
    },
    email: {
        type: String,
    },
    contryCode: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
const User = mongoose_1.model("User", UserSchema);
exports.default = User;
//# sourceMappingURL=userModel.js.map