
export class NotFoundException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NotFoundException";
        Error.captureStackTrace(this, this.constructor);
    }
}