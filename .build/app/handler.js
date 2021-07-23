"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyOTP = exports.create = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const models_1 = require("./models");
require("../config/db");
const userController_1 = require("./controller/userController");
const userController = new userController_1.UserController(models_1.userModel);
const dotenvPath = path_1.default.join(__dirname, '../', `config/.env.${process.env.NODE_ENV}`);
dotenv_1.default.config({
    path: dotenvPath,
});
const create = (event) => {
    return userController.create(event);
};
exports.create = create;
const verifyOTP = (event) => {
    return userController.verifyOtp(event);
};
exports.verifyOTP = verifyOTP;
//# sourceMappingURL=handler.js.map