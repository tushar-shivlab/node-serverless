"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import jwt from "jsonwebtoken";
const models_1 = require("../models");
class AuthService {
    async createotp(userid, otp) {
        try {
            let payload = {
                otp,
                user: userid,
            };
            const token = new models_1.authModel(payload);
            return await token.save();
        }
        catch (error) {
            return error;
        }
    }
    async verifyOtp(mobileNo, otp) {
        try {
            const userMobile = await models_1.userModel.findOne({ mobileNo });
            console.log('userMobile :>> ', userMobile);
            const userOtp = await models_1.authModel.findOne({
                user: ObjectId(userMobile._id),
            });
            console.log('userOtp :>> ', userOtp);
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
}
exports.default = AuthService;
//# sourceMappingURL=authservice.js.map