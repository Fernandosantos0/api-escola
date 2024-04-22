import { Router } from 'express';
const routes = new Router();

/* Importando o controller */
import userController from '../controllers/UserController';

/* Importando o middleware de autenticação */
import loginRequired from '../middlewares/loginRequired';

// Não deveria existir
routes.get('/', loginRequired, userController.index); // Lista usuários
routes.get('/:id', loginRequired, userController.show); // lista usuário por ID

routes.post('/', userController.store);
routes.patch('/', loginRequired, userController.update);
routes.delete('/', loginRequired, userController.delete);

export default routes;

/*
    Um controle deve ter no máximo 5 métodos

    index -> lista todos os usuários -> GET
    store/create -> cria um novo usuário -> GET
    delete -> apaga um usário -> DELETE
    show -> mostra um usuário -> GET
    update -> atualiza um usuário -> PATCH ou PUT
*/
