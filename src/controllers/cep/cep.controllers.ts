import { Request, Response } from 'express';
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

import axios from 'axios';

import GetCepDto from "../../dto/cep/getCep.dto";
import Cep from "../../models/cep";

const NodeCache = require("node-cache");
const cache = new NodeCache();
const TIME_CACHE_EXPIRED = 5 * 60000;

export class CepController {

    static postCep = async (req: Request, res: Response) => {
        const cep = plainToClass(GetCepDto, req.query);
        const validation = await validate(cep, { skipMissingProperties: true });

        if (validation.length)
            return res.send(validation);

        try {
            const query = req.query.cep;

            if (cache.has(query)) {
                return res.send({ ...cache.get(query), cache: true })
            }

            const { data } = await axios.get<Cep>
                (`https://viacep.com.br/ws/${cep['cep']}/json/`);

            if (!GetCepDto.isCep(data))
                throw "CEP inexistente ou inválido";

            cache.set(query, data, TIME_CACHE_EXPIRED);

            res.send({ ...data, cache: false });
        } catch (exception) {

            return res.status(400).send(exception)
        }
    };
}