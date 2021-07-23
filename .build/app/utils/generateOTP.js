"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateOTP = void 0;
class GenerateOTP {
    static async OTP() {
        return Math.floor(1000 + Math.random() * 9000);
    }
}
exports.GenerateOTP = GenerateOTP;
exports.default = GenerateOTP;
//# sourceMappingURL=generateOTP.js.map