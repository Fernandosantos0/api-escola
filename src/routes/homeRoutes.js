import { Router } from 'express';
const routes = new Router();

/* Importando o controller */
import homeController from '../controllers/HomeController';

routes.get('/', homeController.index);

export default routes;
