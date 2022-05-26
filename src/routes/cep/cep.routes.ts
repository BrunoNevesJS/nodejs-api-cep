import { Application } from "express";

import { CepController } from '../../controllers/cep/cep.controllers';

module.exports = (app: Application) => {
    app.get('/viacep', CepController.postCep);
}