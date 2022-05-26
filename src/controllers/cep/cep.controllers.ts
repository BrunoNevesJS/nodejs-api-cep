import { Request, Response } from 'express';
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

import axios from 'axios';

import GetCepDto from "../../dto/cep/getCep.dto";
import Cep from "../../models/cep";

export class CepController {

    static postCep = async (req: Request, res: Response) => {
        const cep = plainToClass(GetCepDto, req.query);
        const validation = await validate(cep, { skipMissingProperties: true });

        if (validation.length)
            return res.send(validation);

        try {
            const { data } = await axios.get<Cep>
                (`https://viacep.com.br/ws/${cep['cep']}/json/`);

            if (!GetCepDto.isCep(data))
                throw "CEP inexistente ou inválido";

            res.send(data);
        } catch (exception) {

            return res.status(400).send(exception)
        }
    };
}