import nanoid from 'nanoid';

export class Identity {
    static createID(): UniqueID {
        return nanoid.nanoid();
    }
}

export type UniqueID = string;