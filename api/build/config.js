"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.appConfig = {
    aws: {
        region: process.env["AWS_REGION"],
        accessKeyId: process.env["AWS_SECRET_ID"],
        secretAccessKey: process.env["AWS_SECRET_KEY"],
    },
    uploadsBucketURL: process.env['S3_UPLOADS_URL'],
    uploadsBucketName: process.env['S3_BUCKET_NAME']
};
