import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';

const routes = new Router();

/* Importando o  controllers */
import fotoController from '../controllers/FotoController';

routes.post('/', loginRequired, fotoController.store);

export default routes;
