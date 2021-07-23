"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AuthTokenSchema = new mongoose_1.Schema({
    otp: {
        type: Number,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
    },
    expiresAt: {
        type: Date,
        default: Date.now(),
        index: { expires: "10m" },
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
const AuthToken = mongoose_1.model("AuthToken", AuthTokenSchema);
exports.default = AuthToken;
//# sourceMappingURL=authModel.js.map