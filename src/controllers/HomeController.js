class HomeController {
    async index(req, res, next) {
        res.status(200).json('novoAluno');
    }
}

export default new HomeController();
