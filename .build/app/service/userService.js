"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserService {
    user;
    constructor(user) {
        this.user = user;
    }
    /**
     * Create book
     * @param params
     */
    async createUser(params) {
        try {
            const { mobileNo } = params;
            const checkMobile = await this.findByMobileNO(mobileNo);
            console.log("checkMobile :>> ", checkMobile);
            if (checkMobile) {
                throw new Error("mobile no already exists");
            }
            else {
                const result = await this.user.create({
                    mobileNo: params?.mobileNo,
                });
                return result;
            }
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    }
    async findByID(id) {
        try {
            const userFind = await this.user.findById(id);
            return userFind;
        }
        catch (err) {
            throw err;
        }
    }
    async findByMobileNO(number) {
        try {
            const userFindByMobile = await this.user.findOne({ mobileNo: number });
            if (userFindByMobile) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (err) {
            throw err;
        }
    }
}
exports.default = UserService;
//# sourceMappingURL=userService.js.map