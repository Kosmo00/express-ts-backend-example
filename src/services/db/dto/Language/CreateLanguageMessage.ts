import { Expose } from "class-transformer";

export class CreateLanguageMessage {
    @Expose()
    name!: string;
}