
export class NotFoundErrorMessage {
    public readonly message: string;
    constructor (){
        this.message = "The resource you are trying to fetch does not exist.";
    }
}