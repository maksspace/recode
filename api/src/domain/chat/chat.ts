import { Message } from "./message";

export class Chat {
    private _messages: Message[] = [];

    get messages() {
        return this._messages;
    }

    sendMessage(message: Message) {
        this._messages.push(message);
    }
}