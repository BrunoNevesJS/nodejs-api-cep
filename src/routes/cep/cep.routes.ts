import { Application } from "express";

import { CepController } from '../../controllers/cep/cep.controllers';

module.exports = (app: Application) => {
    app.post('/viacep', CepController.postCep);
}