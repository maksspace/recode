"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Faces = void 0;
class Faces {
    constructor() {
        this._enabled = true;
    }
    get enabled() {
        return this._enabled;
    }
    disable() {
        this._enabled = false;
    }
    enable() {
        this._enabled = true;
    }
}
exports.Faces = Faces;
