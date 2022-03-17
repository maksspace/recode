"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allowCrossDomain = void 0;
const allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "POST");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
};
exports.allowCrossDomain = allowCrossDomain;
