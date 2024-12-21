import { Exclude, Expose } from "class-transformer";

export class LanguageToSend {
    @Expose()
    id!: string;
    @Expose()
    name!: string;

    @Exclude()
    updatedAt!: Date;
    @Exclude()
    createdAt!: Date;
}

