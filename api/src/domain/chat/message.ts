import { UniqueID } from "../identity";
import { Attachment } from "./attachment";

export class Message {
    private _attachments: Attachment[] = [];
    readonly createdAt: Date = new Date();

    constructor(
        readonly senderId: UniqueID,
        readonly senderName: string,
        readonly text: string = ''
    ) {}

    get attachments() {
        return this._attachments;
    }

    setAttachments(attachments: Attachment[]) {
        this._attachments = attachments;
    }
}