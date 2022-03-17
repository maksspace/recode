export class Faces {
    private _enabled = true;

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