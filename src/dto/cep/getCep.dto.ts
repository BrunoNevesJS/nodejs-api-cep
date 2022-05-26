import { Expose } from "class-transformer";
import { Matches, IsDefined } from "class-validator";
import Cep from "models/cep";

export default class GetCepDto {
    @IsDefined()
    @Expose()
    @Matches(RegExp(/^([\d]{2})\.?([\d]{3})\-?([\d]{3})/))
    cep!: String;

    static isCep(obj: any): obj is Cep {
        return 'cep' in obj &&
            'logradouro' in obj &&
            'complemento' in obj &&
            'bairro' in obj &&
            'localidade' in obj &&
            'uf' in obj &&
            'ibge' in obj &&
            'gia' in obj &&
            'ddd' in obj &&
            'siafi' in obj;
    }
}