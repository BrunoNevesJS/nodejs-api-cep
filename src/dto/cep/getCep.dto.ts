import { Expose } from "class-transformer";
import { Matches, IsDefined } from "class-validator";

export default class GetCepDto {
    @IsDefined()
    @Expose()
    @Matches(RegExp(/^([\d]{2})\.?([\d]{3})\-?([\d]{3})/))
    cep!: String;
}