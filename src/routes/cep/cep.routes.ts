import { Application } from "express";

import { CepController } from '../../controllers/cep/cep.controllers';
import { authenticator } from '../../middleware/auth';

module.exports = (app: Application) => {
    app.post('/viacep', authenticator, CepController.postCep);
}