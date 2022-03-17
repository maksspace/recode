"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3FileUploader = void 0;
const AWS = __importStar(require("aws-sdk"));
const config_1 = require("./config");
const domain_1 = require("./domain");
AWS.config.update(config_1.appConfig.aws);
function s3FileUploader(app) {
    app.get("/s3/sign", (req, res) => {
        const { objectName, contentType } = req.query;
        if (!objectName || !contentType) {
            res.status(400).json({
                error: true,
                message: "Invalid request properties"
            });
        }
        const attachment = new domain_1.Attachment(objectName, "", contentType, 0);
        const params = {
            Bucket: config_1.appConfig.uploadsBucketName,
            Key: attachment.id,
            Expires: 60,
            ContentType: attachment.mimeType,
            ACL: "public-read"
        };
        const s3 = new AWS.S3();
        s3.getSignedUrl("putObject", params, (err, data) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    error: true,
                    message: "Error to upload file to S3 bucket"
                });
            }
            res.json({
                signedUrl: data,
                publicUrl: `${config_1.appConfig.uploadsBucketURL}/${attachment.id}`,
                fileName: attachment.name,
                fileId: attachment.id
            });
        });
    });
}
exports.s3FileUploader = s3FileUploader;
