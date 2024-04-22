import { Router } from 'express';
const routes = new Router();

/* Importando o controller */
import tokenController from '../controllers/TokenController';

routes.post('/', tokenController.store);

export default routes;
