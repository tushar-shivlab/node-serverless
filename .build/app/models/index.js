"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyOtpDTO = exports.UserDTO = exports.authModel = exports.userModel = void 0;
// default model export
var userModel_1 = require("./models/userModel");
Object.defineProperty(exports, "userModel", { enumerable: true, get: function () { return __importDefault(userModel_1).default; } });
var authModel_1 = require("./models/authModel");
Object.defineProperty(exports, "authModel", { enumerable: true, get: function () { return __importDefault(authModel_1).default; } });
//  default dto export
var userDTO_1 = require("./dto/userDTO");
Object.defineProperty(exports, "UserDTO", { enumerable: true, get: function () { return userDTO_1.UserDTO; } });
Object.defineProperty(exports, "verifyOtpDTO", { enumerable: true, get: function () { return userDTO_1.verifyOtpDTO; } });
//# sourceMappingURL=index.js.map