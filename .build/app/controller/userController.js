"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const utils_1 = require("../utils");
const userService_1 = __importDefault(require("../service/userService"));
const authservice_1 = __importDefault(require("../service/authservice"));
class UserController extends userService_1.default {
    auth = new authservice_1.default();
    constructor(user) {
        super(user);
    }
    /**
     * Create user
     * @param {*} event
     */
    async create(event) {
        try {
            const params = JSON.parse(event.body);
            let result = await this.createUser(params);
            if (result) {
                const otp = await utils_1.otpUtils.OTP();
                await this.auth.createotp(result._id, otp);
                let result1 = {
                    ...result._doc,
                    otp,
                };
                return utils_1.messageUtils.success(result1);
            }
            else {
                throw new Error('user is not created');
            }
        }
        catch (err) {
            return utils_1.messageUtils.error(err.code, err.message);
        }
    }
    async verifyOtp(event) {
        try {
            const params = JSON.parse(event.body);
            const { mobileNo, otp } = params;
            const checkMobileNo = await this.findByMobileNO(mobileNo);
            if (!checkMobileNo) {
                throw new Error('mobile no is not found');
            }
            else {
                const verifyOtp = await this.auth.verifyOtp(mobileNo, otp);
                if (verifyOtp) {
                }
                else {
                }
                return utils_1.messageUtils.success(checkMobileNo);
            }
        }
        catch (err) {
            return utils_1.messageUtils.error(err.code, err.message);
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map