import { ValidationError } from "class-validator";

export class UnprocessableContentErrorMessage {
    public readonly message: string;
    public readonly errors: Array<FailedConstrainsList>;
    constructor(errors: ValidationError[]){
        this.message = "Some fields don't pass the validation contrains.";
        this.errors = errors.map(error => new FailedConstrainsList(error));
    }
}

class FailedConstrainsList {
    public readonly target: string;
    public readonly failedConstrains: string[];

    constructor(error: ValidationError){
        this.target = error.property;
        this.failedConstrains = Object.values(error.constraints!);
    }
}