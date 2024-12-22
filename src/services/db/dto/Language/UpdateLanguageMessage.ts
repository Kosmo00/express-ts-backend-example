import { Expose } from "class-transformer";
import { IsString, MaxLength, MinLength } from "class-validator"

export class UpdateLanguageMessage {
    @Expose()
    @IsString()
    @MinLength(1, {
        message: "Name is too short"
    })
    @MaxLength(100, {
        message: "Name is too large"
    })
    name!: string;
}