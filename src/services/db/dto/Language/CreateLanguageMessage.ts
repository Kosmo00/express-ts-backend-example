import { Expose } from "class-transformer";
import { IsString, MaxLength, MinLength } from "class-validator"

export class CreateLanguageMessage {
    @Expose()
    @IsString()
    @MinLength(1, {
        message: "Name is too short"
    })
    @MaxLength(2, {
        message: "Name is too large"
    })
    name!: string;
}