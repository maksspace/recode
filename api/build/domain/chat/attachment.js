"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attachment = void 0;
const identity_1 = require("../identity");
class Attachment {
    constructor(name, url, mimeType, size) {
        this.name = name;
        this.url = url;
        this.mimeType = mimeType;
        this.size = size;
        this.id = `${identity_1.Identity.createID()}_${name}`;
    }
}
exports.Attachment = Attachment;
