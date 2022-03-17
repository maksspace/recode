"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Identity = void 0;
const nanoid_1 = __importDefault(require("nanoid"));
class Identity {
    static createID() {
        return nanoid_1.default.nanoid();
    }
}
exports.Identity = Identity;
