import { Identity } from "../identity";

export class Attachment {
    readonly id: string;

    constructor(
        readonly name: string,
        readonly url: string,
        readonly mimeType: string,
        readonly size: number
    ) {
        this.id = `${Identity.createID()}_${name}`;
    }
}