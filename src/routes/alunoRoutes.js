import { Router } from 'express';
const routes = new Router();

/* Importando o controller */
import alunoController from '../controllers/AlunoController';

/* Importando o middleware de autenticação */
import loginRequired from '../middlewares/loginRequired';

routes.get('/', alunoController.index);
routes.post('/', loginRequired, alunoController.store);
routes.put('/:id', loginRequired, alunoController.update);
routes.get('/:id', alunoController.show);
routes.delete('/:id', loginRequired, alunoController.delete);

export default routes;
